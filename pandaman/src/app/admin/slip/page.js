'use client'

import React, { useEffect, useState } from 'react';

export default function slip() {
    const [slips, setSlips] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/getPayments')
        .then((res) => res.json())
        .then((data) => setSlips(data));
    }, [])

    return (
        <main className="flex min-h-screen flex-col items-center bg-white">
          <div className="navbar p-4 bg-white w-full flex flex-row drop-shadow-xl z-50">
            <div className="flex flex-row flex-wrap w-full justify-between">
              <div className="flex flex-row items-center">
                <h1 className="font-black pl-2">พี่ช้าง อาหารตามสั่ง</h1>
              </div>
              <div className='flex items-center'>
                <button className=" btn btn-xs text-white font-bold bg-gray-600 mr-2"><a href='/admin/control'>หน้าออเดอร์</a></button>
              </div>
            </div>
          </div>
    
          <div className="overflow-x-auto w-full px-4 pt-4">
            <table className="table text-2xl text-center">
              <thead className='text-2xl font-bold'>
                <tr>
                  <th>รายการ</th>
                  <th>ออเดอร์</th>
                  <th>ลิงค์รูป</th>
                  <th>วันที่</th>
                  <th>ราคารวม</th>
                </tr>
              </thead>
              <tbody>
                {slips.map((slip, index) => {
                  const dateTime = new Date(slip.date_time);
                  const formattedDateTime = `${dateTime.getFullYear()}-${('0' + (dateTime.getMonth() + 1)).slice(-2)}-${('0' + dateTime.getDate()).slice(-2)} ${('0' + dateTime.getHours()).slice(-2)}:${('0' + dateTime.getMinutes()).slice(-2)}:${('0' + dateTime.getSeconds()).slice(-2)}`
                  return (
                    <tr key={slip.payment_id}>
                        <th>{index + 1}</th>
                        <td>{slip.order_id}</td>
                        <td><a href={slip.payment_picture} target="_blank" className='text-blue-500 hover:text-blue-700 underline'>หลักฐาน</a></td>
                        <td>{formattedDateTime}</td>
                        <td>{slip.total_price}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </main>
      )
}