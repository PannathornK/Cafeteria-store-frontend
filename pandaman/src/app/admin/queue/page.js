'use client'

import React, { useEffect, useState } from 'react';

export default function krapow() {
  const [queues, setQueues] = useState([]);
  const [refresh, setRefresh] = useState(false);

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
  }, [refresh]);
  
  const changeStatus = async (queueId, status) => {
    const body = {
      queue_id: queueId,
      status: status
    }
    try{
      const response = await fetch('http://localhost:3001/changeQueueStatus', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      })
  
      if(response.ok){
        console.log('API response:', await response.json());
        setRefresh(!refresh)
      } else {
        console.error('API error:', response.statusText);
      }
    } catch(error){
      console.error('API error:', error);
    }
  }

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
            queue.queue_status !== 'finished' && (
              <tr key={queue.queue_id}>
                <td>{queues.filter(q => q.queue_status !== 'finished').indexOf(queue) + 1}</td>
                <td>{queue.menu}</td>
                <td>{queue.spicy}</td>
                <td>{queue.extra === "1" ? "✔️" : "❌"}</td>
                <td>{queue.egg}</td>
                <td>{queue.optional_text ? (
                  <div className='tooltip tooltip-right' data-tip={queue.optional_text}>
                    <img src='/optionalText.svg'></img>
                  </div>
                ) : (
                  <span className='invisible'></span>
                )}</td>
                <td>{queue.container}</td>
                <td>{queue.quantity}</td>
                <td>{queue.queue_status === 'approved' ? (
                  <div className="dropdown dropdown-end">
                    <button className="btn btn-sm text-white font-bold bg-black py-0 px-0">
                      <p className="ml-2">ได้รับการอนุมัติ</p>
                      <img className='w-auto h-7' src='/dropdown.svg'></img>
                    </button>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-36">
                      <li><a onClick={() => changeStatus(queue.queue_id, 'cooking')}>เริ่มทำ</a></li>
                    </ul>
                  </div>
                ) : queue.queue_status === 'cooking' ? (
                  <div className="dropdown dropdown-end">
                    <button className="btn btn-sm text-white font-bold bg-green-500 py-0 px-0">
                      <p className="ml-2">กำลังทำ</p>
                      <img className='w-auto h-7' src='/dropdown.svg'></img>
                    </button>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-36">
                      <li><a onClick={() => changeStatus(queue.queue_id, 'finished')}>เสร็จแล้ว</a></li>
                    </ul>
                  </div>
                ) : (
                  <p>{queue.queue_status}</p>
                )}</td>
              </tr>
            )
          ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
