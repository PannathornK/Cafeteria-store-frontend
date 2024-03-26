'use client'
import React, { useEffect, useState } from 'react'
import { SaleChart } from '@/app/components/sChart';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function dashboard() {
  const [todaySales, setTodaySales] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001/getTodaySales')
      .then((res) => res.json())
      .then((data) => setTodaySales(data));
  }, []);


  const data = [
    { id: 1, item: 'กระเพราหมูกรอบ', value: 18 },
    { id: 2, item: 'ผักกระเที่ยมไก่', value: 16 },
    { id: 3, item: 'สปาเกตตี้หมู', value: 20 },
    { id: 4, item: 'ผักกระเที่ยมหมู', value: 19 },
    { id: 5, item: 'ผักกระเที่ยมกุ้ง', value: 14 },
    { id: 6, item: 'กระเพราคลุกข้าวหมู', value: 13 },
  ];
  const chart_data = {
    labels: "ss",
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };
    return (
      <main className="flex flex-col h-screen bg-white px-4 pt-4">
        <a href="/admin/control">
              <button className="btn btn-sm btn-ghost bg-white text-gray p-0">
                <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
                <div className='text-xl font-bold'>Dashboard</div>
              </button>
            </a>
        <div className='pt-4 grid grid-cols-2'>
          <div>
            <h2 className='font-bold'>
              ยอดขายวันนี้
            </h2>
            <h2 className='font-bold text-coral'>
              {todaySales} บาท
            </h2>
          </div>
          <div>
            <h2 className='font-bold'>
              ยอดขาย
            </h2>
            <SaleChart />
          </div>
        </div>
        <div className='pt-4 grid grid-cols-2 gap-8 py-8'>
          <div>
            <h2 className='font-bold'>
              เมนูขายดี
            </h2>
            {data.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.item}</span>
                <span>{item.value} รายการ</span>
              </div>
            ))}
          </div>
          <div>
            <h2 className='font-bold'>
              วัตถุดิบที่ใช้
            </h2>
            {data.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.item}</span>
                <span>{item.value} รายการ</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }