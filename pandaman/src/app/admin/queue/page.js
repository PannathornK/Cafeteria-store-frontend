'use client'

import React, { useEffect, useState } from 'react';

export default function krapow() {
  const [queues, setQueues] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001/getQueue')
      .then((res) => res.json())
      .then((data) => setQueues(data));
    
    const socket = new WebSocket('ws://localhost:3001');
  
    socket.addEventListener('message', (event) => {
      console.log(event.data);
      if(event.data === 'up')handleMoveUp();
      if(event.data === 'down')handleMoveDown();
      if(event.data === 'accept')changeStatus("cooking", "approved");
      if(event.data === 'finish')changeStatus("finished", "finished");
      if(event.data === 'cancel')changeStatus("cancelled", "rejected");
    })
    
    return () => {
      socket.close();
    }
  }, []);
  
  const handleMoveUp = () => {
    if (selectedItemIndex > 0) {
      setSelectedItemIndex(selectedItemIndex - 1);
    }
  };

  const handleMoveDown = () => {
    if (selectedItemIndex < queues.length - 1) {
      setSelectedItemIndex(selectedItemIndex + 1);
    }
  };

  const changeStatus = (queue_status, order_status) => {
    if (selectedItemIndex >= 0 && selectedItemIndex < queues.length) {
      const selectedQueue = {
        "queue_id": queues[selectedItemIndex].queue_id,
        "queue_status": queue_status,
        "order_status": order_status
      };
      console.log(selectedQueue);
      fetch('http://localhost:3001/changeStatus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedQueue),
      })
    }
  }

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
            <tr key={queue.queue_id} className={index === selectedItemIndex ? 'bg-neutral-content' : ''}>
              <th>{queue.queue_id}</th>
              <th>{queue.menu_name} {queue.meat}</th>
              <th>{queue.spicy}</th>
              <th>{queue.extra === "1" ? "✔️" : "❌"}</th>
              <th>{queue.egg}</th>
              <th>{queue.optional_text}</th>
              <th>{queue.container}</th>
              <th>{queue.quantity}</th>
              <th>{statusLabel[queue.queue_status]}</th>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
