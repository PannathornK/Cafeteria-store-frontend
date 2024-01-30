"use client";

import { saveAs } from "file-saver";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import React, { useState } from "react";
import QRCode from "qrcode.react";
const generatePayload = require("promptpay-qr");

export default function krapow() {
  const showQueue = () => {
    document.getElementById("queueModal").showModal();
  };

  const [amount, setAmount] = useState(155);
  const [qrCode, setqrCode] = useState("sample");
  const [showQR, setShowQR] = useState(false); // Add state variable

  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }
  function handleAmount(e) {
    setAmount(parseFloat(e.target.value));
  }

  const downloadQR = () => {
    var canvas = document.getElementById("QRcanvas");
    canvas.toBlob(function (blob) {
      saveAs(blob, "qr-code.png");
    });
  };
  function handleQR() {
    setqrCode(generatePayload("012-345-6789", { amount }));
    setShowQR(true); // Show the QR code
  }

  return (
    <main className="flex flex-col items-center bg-background">
      <div className="navbar px-4 py-2 bg-white w-full flex flex-row drop-shadow-xl z-50">
        <div className="flex flex-row flex-wrap w-full justify-between">
          <div className="flex flex-row items-center">
            <a href="/">
              <button className="btn btn-sm btn-ghost bg-white text-gray p-0">
                <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
              </button>
            </a>
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
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>
            <p className="text-coral pr-2">15m</p>
            <div
              className="btn btn-sm btn-error bg-coral border-none text-white"
              onClick={showQueue}
            >
              <h1>3</h1>
              <p className="mt-2">คิว</p>
            </div>
          </div>
        </div>

        <dialog id="queueModal" className="modal">
          <div className="modal-box bg-white flex flex-col p-0 w-full h-3/4">
            <form method="dialog">
              <button className="btn btn-sm btn-circle bg-white absolute right-4 top-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </form>
            <div className="px-4 p-0 flex flex-col">
              <div className="w-full flex justify-end mt-2"></div>
              <h2 className=" font-bold mt-8">ออเดอร์ของคิวก่อนหน้า</h2>
              <p className="text-gray-500">
                *สามารถเพิ่มเมนูตามได้ตั้งแต่เมนูที่ 3 ขึ้นไป และไม่เกิน 9
                จานเท่านั้น
              </p>
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
                    <td className="text-left">
                      <p>กระเพรา หมู</p>
                      <p className="text-gray-600">
                        เผ็ดน้อย ไข่ดาว พิเศษ ใส่จาน
                      </p>
                    </td>
                    <td>
                      <p className="flex justify-center items-center w-6 h-6 border-2 border-green-300 rounded mx-auto">
                        1
                      </p>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td className="text-left">
                      <p>ผัดกระเทียม ไก่</p>
                      <p className="text-gray-600">น้ำมันน้อย ใส่จาน</p>
                    </td>
                    <td>
                      <p className="flex justify-center items-center w-6 h-6 border-2 border-yellow-300 rounded mx-auto">
                        3
                      </p>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td className="text-left">
                      <p>สปาเกตตี้ หมู</p>
                      <p className="text-gray-600">ใส่กล่อง</p>
                    </td>
                    <td>
                      <p className="flex justify-center items-center w-6 h-6 border-2 border-red-600 rounded mx-auto">
                        8
                      </p>
                    </td>
                    <td>
                      <div className="btn btn-sm bg-coral text-white whitespace-nowrap">
                        เพิ่มเมนูตาม
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </dialog>
      </div>

      <div className="relative flex flex-col w-full h-screen bg-white mt-4">
        <div className="flex flex-row items-end justify-between p-4">
          <h1 className="font-bold">สรุปยอด</h1>
          <a
            href="/"
            className="btn btn-ghost btn-sm font-normal text-coral p-0"
          >
            เพิ่มออเดอร์
            <ArrowForwardIosIcon className="text-sm" />
          </a>
        </div>
        <div className="flex flex-row items-start justify-between w-full px-4">
          <div className="flex flex-row items-start">
            <div className="w-6 h-6 text-center border-2 border-gray-300 rounded flex justify-center items-center mr-2">
              2
            </div>
            <div className="flex flex-col">
              <p className="font-bold">กระเพรา</p>
              <p className="text-gray-500">หมูกรอบ, เผ็ดน้อย, พิเศษ, ไข่ดาว, ใส่จาน</p>
              <a href="/foodoption" className="text-coral">
                แก้ไข
              </a>
            </div>
          </div>
          <div className="justify-end flex flex-col">
            <p className="">฿ 110</p>
          </div>
        </div>

        <div className="divider mx-4 my-2"></div>

        <div className="flex flex-row items-start justify-between w-full px-4">
          <div className="flex flex-row items-start">
            <div className="w-6 h-6 text-center border-2 border-gray-300 rounded flex justify-center items-center mr-2">
              1
            </div>
            <div className="flex flex-col">
              <p className="font-bold">ข้าวผัด</p>
              <p className="text-gray-500">แหนม, พิเศษ, ใส่กล่อง, ไข่เจียว</p>
              <p className="text-gray-500">ไม่ใส่ผัก</p>
              <a href="/foodoption" className="text-coral">
                แก้ไข
              </a>
            </div>
          </div>
          <div className="justify-end flex flex-col">
            <p className="">฿ 45</p>
          </div>
        </div>
        <div className="divider mx-4 my-2"></div>
        <div className="flex flex-row items-start justify-between w-full px-4 font-bold text-coral">
          <p>รวมทั้งหมด</p>
          <p>฿ 155</p>
        </div>

        {showQR && (
          <div id="qr">
            <div className="w-full items-center flex justify-center mt-8">
              <div className="qrImg h-56 w-56 items-center flex justify-center">
                <QRCode id="QRcanvas" value={qrCode} size={180} />
              </div>
            </div>

            <div className="w-full flex items-center justify-center relative">
              <img
                src="/chat-bubble.svg"
                className="txtbubble h-40 w-64 rotate-180"
                alt="Chat bubble"
              ></img>
              <h1
                className="absolute top-1/2 text-white font-bold"
                onClick={downloadQR}
              >
                ดาวน์โหลด Qr code
              </h1>
            </div>
          </div>
        )}
      </div>

      <div className="sticky bottom-0 w-full bg-white mt-auto">
        <div className="divider m-0 p-0 h-0"></div>
        <div className="flex flex-col px-6 py-4 text-center items-center">
          <button className="btn bg-coral text-white w-full" onClick={handleQR}>
            <p className="font-bold">ชำระเงิน - ฿60</p>
          </button>
        </div>
      </div>
    </main>
  );
}
