'use client'
import React, { useEffect, useState } from 'react'

export default function control() {

  // const [socket, setSocket] = useState(null);
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/getOrder')
    .then((res) => res.json())
    .then((data) => setOrders(data))
  }, [])

  // const sendMessage = (message) => {
  //   if (socket && socket.readyState === WebSocket.OPEN) {
  //     socket.send(message);
  //   } else {
  //     console.error('WebSocket is not connected');
  //   }
  // }

  // const showData = () => {
  //   document.getElementById('dataModal').showModal();
  // };
  const cfgData = () => {
    document.getElementById('cfgModal').showModal();
  };

  const List = ({ names }) => (
    <ul>
      {names.map((name) => (
        <li key={name}>{name}<br /></li>
      ))}
    </ul>
  );

  const ExtraList = ({ names }) => (
    <ul>
      {names.map((name) => (
        <li key={name}>{name === 1 ? "✔️" : "❌"}<br /></li>
      ))}
    </ul>
  );

  return (
      <main className="flex flex-col bg-white">
        <div className='flex flex-row h-12 px-4 py-2 items-center justify-between shadow-md'>
          <div className='flex items-center'>
          <h2 className='font-bold'>พี่ช้าง อาหารตามสั่ง</h2>
          <input type="checkbox" className="toggle toggle-error ml-4" />
          <p className='ml-2'>ปิด/เปิดร้าน</p>
          </div>

        <div className='flex items-center'>
          <button className=" btn btn-xs text-white font-bold bg-gray-600 mr-2" onClick={cfgData}> แก้ไข</button>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn-sm flex p-0 items-center">
              <img className='w-auto' src='/account.svg'></img>
            </div>
             <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-36">
                <li><a>ข้อมูล</a></li>
                <li><a>ออกจากระบบ</a></li>
             </ul>
           </div>
        </div>
        </div>


        {/* <div className='mt-8 flex flex-row items-center justify-between mx-16'>
        <div className='flex flex-col'>
        <div className='triangle bg-coral mx-8 mt-8' onClick={() => sendMessage('up')}></div>
        <div className="triangle2 bg-coral mx-8 mt-16" onClick={() => sendMessage('down')}></div>
        </div>
        <button className="btn w-40 h-20 text-white font-bold bg-coral drop-shadow-md border-none" onClick={() => sendMessage('accept')}> <h2>ยืนยันออเดอร์</h2></button>
        <button className="btn w-40 h-20 text-white font-bold bg-green-600 drop-shadow-md border-none" onClick={() => sendMessage('finish')}> <h2>ออเดอร์เสร็จ</h2></button>
        <button className="btn w-40 h-20 text-white font-bold bg-red-600 drop-shadow-md border-none" onClick={() => sendMessage('cancel')}> <h2>ลบออเดอร์</h2></button>
        </div> */}

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>ออเดอร์</th>
        <th>เมนู</th>
        <th>ความเผ็ด</th>
        <th>พิเศษ</th>
        <th>ไข่</th>
        <th>ภาชนะ</th>
        <th>ออเดอร์รวม</th>
        <th>สถานะ</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {orders.reduce((groupedOrder, item) => {
          const existingGroup = groupedOrder.find(
            (group) => group.order_id === item.order_id
          );
          if (existingGroup) {
            existingGroup.order_menu_id.push(item.order_menu_id);
            existingGroup.order_menu_status.push(item.order_menu_status);
            existingGroup.menu.push(item.menu);
            existingGroup.spicy.push(item.spicy);
            existingGroup.extra.push(item.extra);
            existingGroup.egg.push(item.egg);
            existingGroup.container.push(item.container);
          } else {
            groupedOrder.push({
              order_id: item.order_id,
              order_menu_id: [item.order_menu_id],
              order_status: item.order_status,
              order_menu_status: [item.order_menu_status],
              total_menu: item.total_menu,
              menu: [item.menu],
              spicy: [item.spicy],
              extra: [item.extra],
              egg: [item.egg],
              optional_text: item.optional_text,
              container: [item.container],
              queue_id: item.queue_id
            });
          }
          console.log(groupedOrder);
          return groupedOrder;
        }, []).map((order, index) => (
        <tr key={order.order_id}>
          <th>{index + 1}</th>
          <td><List names={order.menu}/></td>
          <td><List names={order.spicy}/></td>
          <td><ExtraList names={order.extra}/></td>
          <td><List names={order.egg}/></td>
          <td><List names={order.container}/></td>
          <td>{order.total_menu}</td>
          <td>
          <div className="dropdown dropdown-end">
            <button tabIndex={0} role="button" className="btn btn-sm justify-center text-white font-bold bg-red-500 pr-1">
              <div className='flex items-center'>
              รอการยืนยัน 
               <img className='w-auto h-7 justify-end' src='/dropdown.svg'></img>
              </div>
            </button>
             <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-36">
                <li><a>ยืนยัน</a></li>
                <li><a>ยกเลิก</a></li>
             </ul>
           </div>
          </td>
        </tr>
      ))}
      {/* <tr>
        <th>1</th>
        <td>กระเพรา หมู <br></br>ผัดผงกะหรี่ กุ้ง</td>
        <td>ไข่ดาว 2 , พิเศษ 3 <br></br>ไข่ดาว 1 , พิเศษ 2</td>
        <td>4</td>
        <td className='flex justify-center'>
          <div className='flex-col'>
          <div className="dropdown dropdown-end">
            <button tabIndex={0} role="button" className="btn btn-sm justify-center text-white font-bold bg-black pr-1">
              <div className='flex items-center'>
               กำลังทำ 
               <img className='w-auto h-7 justify-end' src='/dropdown.svg'></img>
              </div>
            </button>
             <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-36">
                <li><a>ออเดอร์เสร็จ</a></li>
             </ul>
           </div>
            <br></br>
            <div className="dropdown dropdown-end">
            <button tabIndex={0} role="button" className="btn btn-sm justify-center text-white font-bold bg-black pr-1">
              <div className='flex items-center'>
               กำลังทำ 
               <img className='w-auto h-7 justify-end' src='/dropdown.svg'></img>
              </div>
            </button>
             <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-36">
                <li><a>ออเดอร์เสร็จ</a></li>
             </ul>
           </div>
          </div>
          <div className='flex'>
          <div className="dropdown dropdown-end">
          <button className="btn btn-sm text-white font-bold bg-black h-full py-2 px-0">
              <img className='w-auto h-7' src='/dropdown.svg'></img>
            </button>
             <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-36">
                <li><a>ออเดอร์เสร็จ</a></li>
             </ul>
           </div>
          </div>
        </td>
      </tr> */}

      {/* row 2 */}
      {/* <tr>
        <th>2</th>
        <td>ข้าวผัด หมูกรอบ</td>
        <td>พิเศษ 2</td>
        <td>3</td>
        <td>
        <div className="dropdown dropdown-end">
        <button tabIndex={0} role="button" className="btn btn-sm justify-center text-white font-bold bg-green-600 pr-1">
              <div className='flex items-center'>
               เสร็จแล้ว 
               <img className='w-auto h-7 justify-end' src='/dropdown.svg'></img>
              </div>
            </button>
             <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-36">
                <li><a>ลบรายการ</a></li>
             </ul>
           </div>
        </td>
      </tr> */}
      {/* row 3 */}
      {/* <tr>
      <th>3</th>
        <td>ข้าวผัด หมูกรอบ</td>
        <td>พิเศษ 2</td>
        <td>3</td>
        <td><button className=" btn btn-sm text-blue-900 font-bold mr-2"> รอการชำระเงิน</button></td>
      </tr> */}
      {/* row 4 */}
      {/* <tr>
      <th>4</th>
      <td>กระเพรา หมู <br></br>ผัดผงกะหรี่ กุ้ง</td>
        <td>ไข่ดาว 2 , พิเศษ 3 <br></br>ไข่ดาว 1 , พิเศษ 2</td>
        <td>3</td>
        <td>
          <div className="dropdown dropdown-end">
            <button tabIndex={0} role="button" className="btn btn-sm justify-center text-white font-bold bg-red-500 pr-1">
              <div className='flex items-center'>
              รอการยืนยัน 
               <img className='w-auto h-7 justify-end' src='/dropdown.svg'></img>
              </div>
            </button>
             <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-36">
                <li><a>ยืนยัน</a></li>
                <li><a>ยกเลิก</a></li>
             </ul>
           </div>
          </td>
      </tr> */}
    </tbody>
  </table>
</div>

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
      <p>หมูกรอบ</p>
      <p>18 จาน</p>
      <p>หมู</p>
      <p>16 จาน</p>
      <p>เบค่อน</p>
      <p>16 จาน</p>
      <p>ไก่</p>
      <p>15 จาน</p>
      <p>กุ้ง</p>
      <p>10 จาน</p>
      <p>ปลาหมึก</p>
      <p>8 จาน</p>
    </div>
    </div>
    </div>
        
  </div>
</dialog>

      </main>
    );
  }