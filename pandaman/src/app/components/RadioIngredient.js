import React, { useEffect } from 'react';
import { atom, useAtom } from 'jotai';

const radioIngredientAtom = atom('');

const RadioIngredient = () => {
  const [selectedRadio, setSelectedRadio] = useAtom(radioIngredientAtom);

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  useEffect(() => {
    const savedRadioState = localStorage.getItem('radioIngredientState');
    if (savedRadioState) {
      setSelectedRadio(savedRadioState);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('radioIngredientState', selectedRadio);
  }, [selectedRadio]);

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <div className="flex flex-row">
          <input
            type="radio"
            value="radio1"
            name="radio-1"
            className="radio checked:bg-coral"
            checked={selectedRadio === 'radio1'}
            onChange={handleRadioChange}
          />
          <p className="pl-4">หมู</p>
        </div>
        <span className="label-text flex flex-row items-end">
          <p className="text-gray-500">฿</p>
          <p className="font-bold pl-1">0</p>
        </span>
      </label>

      <div className="divider m-0"></div>

      <label className="label cursor-pointer">
        <div className="flex flex-row">
          <input
            type="radio"
            value="radio2"
            name="radio-2"
            className="radio checked:bg-coral"
            checked={selectedRadio === 'radio2'}
            onChange={handleRadioChange}
          />
          <p className="pl-4">ไก่</p>
        </div>
        <span className="label-text flex flex-row items-end">
          <p className="text-gray-500">฿</p>
          <p className="font-bold pl-1">0</p>
        </span>
      </label>

      <div className="divider m-0"></div>

      <label className="label cursor-pointer">
        <div className="flex flex-row">
          <input
            type="radio"
            value="radio3"
            name="radio-3"
            className="radio checked:bg-coral"
            checked={selectedRadio === 'radio3'}
            onChange={handleRadioChange}
          />
          <p className="pl-4">หมูกรอบ</p>
        </div>
        <span className="label-text flex flex-row items-end">
          <p className="text-gray-500">฿</p>
          <p className="font-bold pl-1">5</p>
        </span>
      </label>

      <div className="divider m-0"></div>

      <label className="label cursor-pointer">
        <div className="flex flex-row">
          <input
            type="radio"
            value="radio4"
            name="radio-4"
            className="radio checked:bg-coral"
            checked={selectedRadio === 'radio4'}
            onChange={handleRadioChange}
          />
          <p className="pl-4">เบค่อน</p>
        </div>
        <span className="label-text flex flex-row items-end">
          <p className="text-gray-500">฿</p>
          <p className="font-bold pl-1">5</p>
        </span>
      </label>

      <div className="divider m-0"></div>

<label className="label cursor-pointer">
  <div className="flex flex-row">
    <input
      type="radio"
      value="radio5"
      name="radio-5"
      className="radio checked:bg-coral"
      checked={selectedRadio === 'radio5'}
      onChange={handleRadioChange}
    />
    <p className="pl-4">กุ้ง</p>
  </div>
  <span className="label-text flex flex-row items-end">
          <p className="text-gray-500">฿</p>
          <p className="font-bold pl-1">10</p>
        </span>
</label>

<div className="divider m-0"></div>

      <label className="label cursor-pointer">
        <div className="flex flex-row">
          <input
            type="radio"
            value="radio6"
            name="radio-6"
            className="radio checked:bg-coral"
            checked={selectedRadio === 'radio6'}
            onChange={handleRadioChange}
          />
          <p className="pl-4">ปลาหมึก</p>
        </div>
        <span className="label-text flex flex-row items-end">
          <p className="text-gray-500">฿</p>
          <p className="font-bold pl-1">10</p>
        </span>
      </label>

    </div>
  );
};

export default RadioIngredient;