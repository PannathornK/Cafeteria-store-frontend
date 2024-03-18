'use client'

import React, { useEffect, useState } from 'react';

export default function krapow() {
  const [queues, setQueues] = useState([]);
  // const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001/getQueue')
      .then((res) => res.json())
      .then((data) => setQueues(data));
    
    // const socket = new WebSocket('ws://localhost:3001');
  
    // socket.addEventListener('message', (event) => {
    //   console.log(event.data);
    //   if(event.data === 'up')handleMoveUp();
    //   if(event.data === 'down')handleMoveDown();
    //   if(event.data === 'accept')changeStatus("cooking", "approved");
    //   if(event.data === 'finish')changeStatus("finished", "finished");
    //   if(event.data === 'cancel')changeStatus("cancelled", "rejected");
    // })
    
    // return () => {
    //   socket.close();
    // }
  }, []);
  
  // const handleMoveUp = () => {
  //   if (selectedItemIndex > 0) {
  //     setSelectedItemIndex(selectedItemIndex - 1);
  //   }
  // };

  // const handleMoveDown = () => {
  //   if (selectedItemIndex < queues.length - 1) {
  //     setSelectedItemIndex(selectedItemIndex + 1);
  //   }
  // };

  // const changeStatus = (queue_status, order_status) => {
  //   if (selectedItemIndex >= 0 && selectedItemIndex < queues.length) {
  //     const selectedQueue = {
  //       "queue_id": queues[selectedItemIndex].queue_id,
  //       "queue_status": queue_status,
  //       "order_status": order_status
  //     };
  //     console.log(selectedQueue);
  //     fetch('http://localhost:3001/changeStatus', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(selectedQueue),
  //     })
  //   }
  // }

  const statusLabel = {
    "wait-confirm": "รอการยืนยัน",
    "finished": "เสร็จแล้ว",
    "cancelled": "ยกเลิก",
    "cooking": "กำลังทำ"
  }

  // const showQueue = () => {
  //   document.getElementById('queueModal').showModal();
  // };
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
              <th>ความเผ็ด</th>
              <th>พิเศษ</th>
              <th>ไข่</th>
              <th>เพิ่มเติม</th>
              <th>ภาชนะ</th>
              <th>ออเดอร์รวม</th>
              <th>สถานะ</th>
            </tr>
          </thead>
          <tbody>
          {queues.map((queue, index) => (
            <tr key={queue.queue_id}>
              <td>{index + 1}</td>
              <td>{queue.menu}</td>
              <td>{queue.spicy}</td>
              <td>{queue.extra === "1" ? "✔️" : "❌"}</td>
              <td>{queue.egg}</td>
              <td>{queue.optional_text}</td>
              <td>{queue.container}</td>
              <td>{queue.quantity}</td>
              <td>{queue.queue_status === 'approved' ? (
                <div className="dropdown dropdown-end">
                  <button className="btn btn-sm text-white font-bold bg-black py-0 px-0">
                    <p className="ml-2">ได้รับการอนุมัติ</p>
                    <img className='w-auto h-7' src='/dropdown.svg'></img>
                  </button>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-36">
                    <li>เริ่มทำ</li>
                  </ul>
                </div>
              ): (queue.queue_status)}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
