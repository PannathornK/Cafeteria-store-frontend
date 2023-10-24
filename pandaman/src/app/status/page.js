'use client'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function status() {
    const showQueue = () => {
        document.getElementById('queueModal').showModal();
      };

      const cancelOrder = () => {
        document.getElementById('cancelModal').showModal();
      };
  return (
    <main className="flex flex-col items-center bg-background">
        <div className="navbar px-4 py-2 bg-white w-full flex flex-row drop-shadow-xl z-50">
        <div className="flex flex-row flex-wrap w-full justify-between">
          <div className="flex flex-row items-center">
          <button className="btn btn-ghost bg-white text-gray p-0"><ArrowBackIosNewIcon className='text-sm'/></button>
            <h1 className="font-black pl-2">พี่ช้าง อาหารตามสั่ง</h1>
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
    
      <video className='h-48 w-full object-contain' src='/complete.mp4' preload="auto" loop autoPlay muted></video>

      <div className="relative flex flex-col h-auto bg-white p-4 w-full">
      <h2 className='font-bold'>สถานะคำสั่งซื้อของออเดอร์ 001 :</h2>
      <h1 className='font-bold text-green-600'>ออเดอร์ของคุณเสร็จแล้ว</h1>

      <div className='join join-horizontal p-4 items-center justify-between'>
      <div className='flex w-16 h-16 rounded bg-statusbg items-center justify-center'>
        <img src='/approve-done.svg' className='w-8 h-8'></img>
        </div>
        <progress className="progress progress-error w-10 rounded bg-statusbg border-2 border-statusbg" value={100}></progress>
        <div className='flex w-16 h-16 rounded bg-statusbg items-center justify-center'>
        <img src='/cooking-done.svg' className='w-8 h-8'></img>
        </div>
        <progress className="progress progress-error w-10 rounded bg-statusbg border-2 border-statusbg" value={100}></progress>
        <div className='flex w-16 h-16 rounded bg-coral items-center justify-center'>
        <img src='/bell-active.svg' className='w-8 h-8'></img>
        </div>
      </div>
      <h1 className='font-bold'>คิวก่อนหน้า : 2</h1>

</div>

<div className='relative flex flex-col w-full h-80 bg-white mt-4 p-4'>
  <h1 className='font-bold'>สรุปคำสั่งซื้อ</h1>

  <div className="flex flex-row flex-wrap justify-between w-full p-4">
    <div className='flex flex-row'>
    <div className='w-6 h-6 text-center border-2 border-gray-300 rounded flex justify-center items-center mr-2'>1</div>
    <div className="flex flex-col">
        <p className='font-bold'>กระเพรา</p>
        <p className='text-gray-500'>หมู, พิเศษ, ไข่ดาว</p>
    </div>
    </div>
      
  </div>


  
</div>

<dialog id="cancelModal" className="modal">
  <div className="modal-box bg-white flex flex-col py-6 px-4 w-full">
    <h1 className='font-bold text-center'>คุณต้องการยกเลิกคำสั่งซื้อใช่หรือไม่</h1>
    <div className="flex justify-between pt-4">
    <form method="dialog">
      <button className="btn bg-gray-400 text-white w-40">ยกเลิก</button>
    </form>
      <button className="btn btn-error bg-coral text-white w-40">ตกลง</button>
</div>
  </div>
</dialog>


<div className="sticky bottom-0 w-full bg-white mt-auto">
  <div className="divider m-0 p-0 h-0"></div> 
  <div className="flex flex-col px-6 py-4 text-center items-center">
    <button className="btn bg-coral text-white w-full" onClick={cancelOrder}>
      <p className="font-bold">กลับไปหน้าแรก</p>
    </button>
  </div>
</div>
</main>
  )
}
