'use client'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';

export default function nav() {

  const showQueue = () => {
    document.getElementById('queueModal').showModal();
  };

  return (
    <main className="flex h-screen flex-col items-center bg-background">
      <div className="navbar p-4 bg-white w-full flex flex-row drop-shadow-xl z-50">
        <div className="flex flex-row flex-wrap w-full justify-between">
          <div className="flex flex-row items-center">
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
        <div className="relative w-full pt-2">
          <input
            type="text"
            placeholder="ค้นหา"
            className="input pl-10 pr-4 input-bordered md:w-auto w-full bg-gray-200 border-none"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none pt-2">
            <SearchIcon style={{fill: "gray"}} />
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

      <div className="menuList bg-white w-full h-auto mt-4">
        <div className="grid grid-cols-2 p-6 gap-6">

          <a href='/foodoption/1' className="card card-compact indicator w-auto bg-white shadow-xl">
    <figure><img src="/food.jpg" alt="image 2" /></figure>
          <span className="indicator-item badge bg-coral w-6 h-6 text-white font-extrabold mr-4 mt-4">1</span> 
  <div className="card px-2 py-2 flex-row justify-between text-center items-center">
    <h2 className="font-bold">ผัดพริกแกง</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-xs btn-success bg-price text-white">฿ 45</button>
    </div>
  </div>
</a>

<a href='/foodoption' className="card card-compact w-auto bg-white shadow-xl">
    <figure><img src="/food.jpg" alt="image 2" /></figure>
  <div className="card px-2 py-2 flex-row justify-between text-center items-center">
    <h2 className="font-bold">กระเพรา</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-xs btn-success bg-price text-white">฿ 45</button>
    </div>
  </div>
</a>
        </div>
      </div>

      <div className="sticky bottom-0 w-full bg-white mt-auto">
  <div className="divider m-0 p-0 h-0"></div> 
  <div className="flex flex-col px-6 py-4 text-center items-center">
    <a href='/summary' className='w-full flex items-center justify-center'>
  <button className="btn bg-coral w-full text-white flex items-center justify-center">
  <div className='flex rounded-md w-6 h-6 bg-white text-coral font-bold justify-center items-center'>
    1
  </div>
  <p className="font-bold ml-2 text-center flex-1">สั่งอาหาร - ฿60</p>
</button>
</a>
  </div>
</div>

    </main>
  );
}