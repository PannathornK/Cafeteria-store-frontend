'use client'
import React from 'react'

export default function control() {

  const showData = () => {
    document.getElementById('dataModal').showModal();
  };

    return (
      <main className="flex flex-col bg-white">
        <div className='flex flex-row p-4 items-center'>
          <h1 className='font-bold'>พี่ช้าง อาหารตามสั่ง</h1>
          <input type="checkbox" className="toggle toggle-error ml-4" />
        <p className='ml-2'>ปิด/เปิดร้าน</p>
        </div>
        <div className='mt-8 flex flex-row items-center justify-between mx-16'>
        <div className='flex flex-col'>
        <div className='triangle bg-coral mx-8 mt-8'></div>
        <div className="triangle2 bg-coral mx-8 mt-16"></div>
        </div>
        <button className="btn w-40 h-20 text-white font-bold bg-coral drop-shadow-md border-none"> <h2>ยืนยันออเดอร์</h2></button>
        <button className="btn w-40 h-20 text-white font-bold bg-green-600 drop-shadow-md border-none"> <h2>ออเดอร์เสร็จ</h2></button>
        <button className="btn w-40 h-20 text-white font-bold bg-red-600 drop-shadow-md border-none"> <h2>ลบออเดอร์</h2></button>
        </div>
        <button className="absolute bottom-0 right-0 btn btn-sm text-white font-bold bg-gray-600 mr-4 mb-4" onClick={showData}> ข้อมูล</button>

        <dialog id="dataModal" className="modal">
  <div className="modal-box bg-white flex flex-col p-0 w-full h-3/4">
    <form method="dialog">
      <button className="btn btn-xs btn-circle bg-white absolute right-2 top-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </form>
    <div className='grid grid-cols-2 px-4 pt-4'>
    <div className='flex flex-col '>
    <h2 className='font-bold'>เมนูขายดี</h2>
    <div className='mt-2'>
      <div className='flex flex-row'>
      <p className='mr-4'>1</p>
      <p>กระเพรา หมู</p>
      </div>
      <div className='flex flex-row mt-2'>
      <p className='mr-4'>2</p>
      <p>ผัดกระเทียม ไก่</p>
      </div>
      <div className='flex flex-row mt-2'>
      <p className='mr-4'>3</p>
      <p>สปาเกตตี้ หมู</p>
      </div>
      <div className='flex flex-row mt-2'>
      <p className='mr-4'>4</p>
      <p>ผัดกระเทียม หมู</p>
      </div>
      <div className='flex flex-row mt-2'>
      <p className='mr-4'>5</p>
      <p>ผัดกระเทียม กุ้ง</p>
      </div>
      <div className='flex flex-row mt-2'>
      <p className='mr-4'>6</p>
      <p>กระเพรา หมูกรอบ</p>
      </div>
    </div>
    
    </div>

    <div className='flex flex-col'>
    <h2 className='font-bold'>วัตถุดิบที่ใช้ในวันนี้</h2>
    <div className='grid grid-cols-2 gap-y-2 mt-2'>
      <p>หมู</p>
      <p>18 จาน</p>
      <p>หมู</p>
      <p>18 จาน</p>
      <p>หมู</p>
      <p>18 จาน</p>
      <p>หมู</p>
      <p>18 จาน</p>
      <p>หมู</p>
      <p>18 จาน</p>
      <p>หมู</p>
      <p>18 จาน</p>
    </div>
    </div>
    </div>
        
  </div>
</dialog>
      </main>
    );
  }