'use client'

import React from 'react';

export default function krapow() {
  const showQueue = () => {
    document.getElementById('queueModal').showModal();
  };
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
        <div className="navbar p-4 bg-white w-full flex flex-row drop-shadow-xl z-50">
        <div className="flex flex-row flex-wrap w-full justify-between">
          <div className="flex flex-row items-center">
            <h1 className="font-black pl-2">พี่ช้าง อาหารตามสั่ง</h1>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto w-full px-4 pt-4">
      <table className="table text-2xl text-center">
  <thead className='text-2xl font-bold'>
    <tr>
      <th>คิว</th>
      <th>เมนู</th>
      <th>เพิ่มเติม</th>
      <th>ออเดอร์รวม</th>
      <th>สถานะ</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hover">
      <th>1</th>
      <td>กระเพรา หมู</td>
      <td>ไข่ดาว 2 , พิเศษ 3</td>
      <td>4</td>
      <td>กำลังทำ</td>
    </tr>
    <tr className="hover">
      <th>2</th>
      <td>ข้าวผัด หมูกรอบ</td>
      <td>พิเศษ 2</td>
      <td>4</td>
      <td>กำลังทำ</td>
    </tr>
    <tr className="hover">
      <th>3</th>
      <td>ผัดพริกเผา เบค่อน</td>
      <td>ไข่ดาว 1</td>
      <td>4</td>
      <td>รอการชำระเงิน</td>
    </tr>
    <tr className="hover">
      <th>4</th>
      <td>ผัดผงกะหรี่ กุ้ง</td>
      <td>ไข่ดาว 1 , พิเศษ 2</td>
      <td>2</td>
      <td>รอการยืนยัน</td>
    </tr>
  </tbody>
</table>
</div>
    

</main>
  )
}
