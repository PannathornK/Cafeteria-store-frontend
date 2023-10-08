'use client'

import React from 'react';
import AmountButton from '../components/AmountButton';
import Textarea from '../components/Textarea';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RadioIngredient from '../components/RadioIngredient';
import RadioSpicy from '../components/RadioSpicy';
import CheckboxExtra from '../components/CheckboxExtra';
import CheckboxEgg from '../components/CheckboxEgg';

export default function krapow() {
  const showQueue = () => {
    document.getElementById('queueModal').showModal();
  };
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
        <div className="navbar p-4 bg-white w-full flex flex-row drop-shadow-xl z-50">
        <div className="flex flex-row flex-wrap w-full justify-between">
          <div className="flex flex-row items-center">
            <a href='/'>
          <button className="btn btn-sm btn-ghost bg-white text-gray p-0"><ArrowBackIosNewIcon sx={{ fontSize: 14 }}/></button>
          </a>
            <h1 className="font-black pl-2">กระเพรา</h1>
          </div>
          <div className="flex flex-grow justify-end items-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="coral"
              className="bi bi-clock mb-1.5 mr-1"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path
                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
              />
            </svg>
            <p className="text-coral pr-2">15m</p>
            <div className="btn btn-sm btn-error bg-coral border-none text-white" onClick={showQueue}>
              <h1>3</h1><p className="mt-2">คิว</p>
            </div>
          </div>
        </div>
        
        <dialog id="queueModal" className="modal">
  <div className="modal-box bg-white flex flex-col p-0 w-full h-3/4">
    <form method="dialog">
      <button className="btn btn-sm btn-circle bg-white absolute right-4 top-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </form>
    <div className='px-4 p-0 flex flex-col'>
            <div className="w-full flex justify-end mt-2">
    </div>
        <h2 className=' font-bold mt-8'>ออเดอร์ของคิวก่อนหน้า</h2> 
        <p className='text-gray-500'>*สามารถเพิ่มเมนูตามได้ตั้งแต่เมนูที่ 3 ขึ้นไป และไม่เกิน 9 จานเท่านั้น</p>
        </div>
        <div className="overflow-y-auto overflow-x-hidden">
  <table className="table text-center w-full ">
  <thead>
    <tr>
      <th>คิว</th>
      <th>เมนู</th>
      <th>ออเดอร์รวม</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td className='text-left'>
        <p>กระเพรา หมู</p>
        <p className='text-gray-600'>เผ็ดน้อย ไข่ดาว พิเศษ ใส่จาน</p>
      </td>
      <td>
        <p className='flex justify-center items-center w-6 h-6 border-2 border-green-300 rounded mx-auto'>1</p>
      </td>
      <td></td>
    </tr>
    <tr>
      <th>2</th>
      <td className='text-left'>
      <p>ผัดกระเทียม ไก่</p>
        <p className='text-gray-600'>น้ำมันน้อย ใส่จาน</p>
      </td>
      <td>
        <p className='flex justify-center items-center w-6 h-6 border-2 border-yellow-300 rounded mx-auto'>3</p>
      </td>
      <td></td>
    </tr>
    <tr>
      <th>3</th>
      <td className='text-left'>
      <p>สปาเกตตี้ หมู</p>
        <p className='text-gray-600'>ใส่กล่อง</p>
      </td>
      <td>
        <p className='flex justify-center items-center w-6 h-6 border-2 border-red-600 rounded mx-auto'>8</p>
      </td>
      <td>
        <div className='btn btn-sm bg-coral text-white whitespace-nowrap'>เพิ่มเมนูตาม</div>
      </td>
    </tr>
  </tbody>
</table>
</div>
  </div>
</dialog>

      </div>

    <div className="relative flex flex-col w-full bg-white ">
  <figure><img className="h-48 w-full object-cover" src="/food.jpg" alt="krapow" /></figure>
  <div className="flex flex-row items-center justify-between w-full px-6 py-4">
    <h2 className="card-title">
      กระเพรา
    </h2>
    <div className="justify-end flex flex-col"> 
      <p className="font-bold">฿ 45</p>
      <p className="text-xs">Base Price</p>
      </div>
  </div>
</div>

<div className="flex flex-col w-full bg-white px-6 mt-4 py-4">
  <div className="flex flex-row items-end mb-2">
    <p className="font-bold">ประเภทเนื้อสัตว์</p> <p className="pl-2 text-sm">Required, select 1</p>
  </div>
  <RadioIngredient />

</div>

<div className="flex flex-col w-full bg-white  px-6 mt-4 py-4">
  <div className="flex flex-row items-end mb-2">
    <p className="font-bold">ระดับความเผ็ด</p> <p className="pl-2 text-sm">Required, select 1</p>
  </div>
  <RadioSpicy />

</div>

<div className="flex flex-col w-full bg-white  px-6 mt-4 py-4">
  <div className="flex flex-row items-end mb-2">
    <p className="font-bold">พิเศษ</p> <p className="pl-2 text-sm">Optional</p>
  </div>
  <CheckboxExtra />

</div>

<div className="flex flex-col w-full bg-white  px-6 mt-4 py-4">
  <div className="flex flex-row items-end mb-2">
    <p className="font-bold">เพิ่มไข่</p> <p className="pl-2 text-sm">Optional</p>
  </div>
  <CheckboxEgg/>

</div>

<div className="flex flex-col w-full bg-white  px-6 mt-4 py-4">
  <div className="flex flex-row items-end mb-2">
    <p className="font-bold">ภาชนะ</p> <p className="pl-2 text-sm">Required, select 1</p>
  </div>
  <div className="form-control">
  <label className="label cursor-pointer">
    <div className="flex flex-row">
    <input type="radio" name="radio-1" className="radio checked:bg-coral"/>
    <p className="pl-4">ใส่จาน</p>
    </div>
    <span className="label-text flex flex-row items-end"> <p className="text-gray-500">฿</p> <p className="font-bold pl-1">0</p> </span> 
  </label>

<div className="divider m-0"></div> 

 <label className="label cursor-pointer">
    <div className="flex flex-row">
    <input type="radio" name="radio-2" className="radio checked:bg-coral"/>
    <p className="pl-4">ใส่กล่อง</p>
    </div>
    <span className="label-text flex flex-row items-end"> <p className="text-gray-500">฿</p> <p className="font-bold pl-1">5</p> </span> 
  </label>
</div>

</div>

<div className="flex flex-col w-full bg-white  px-6 mt-4 py-4">
  <div className="flex flex-row items-end">
    <p className="font-bold">เพิ่มเติม</p> <p className="pl-2 text-sm">Optional</p>
  </div>
<Textarea/>
<div className="flex flex-row justify-center text-center items-center mt-4">
<AmountButton/>
</div>
</div>

<div className="sticky bottom-0 w-full bg-white mt-auto">
  <div className="divider m-0 p-0 h-0"></div> 
  <div className="flex flex-col px-6 py-4 text-center items-center">
    <button className="btn bg-coral text-white w-full">
      <p className="font-bold">เพิ่มออเดอร์ - ฿60</p>
    </button>
  </div>
</div>

</main>
  )
}
