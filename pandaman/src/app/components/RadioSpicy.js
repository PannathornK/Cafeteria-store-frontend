import React, { useEffect } from 'react';
import { atom, useAtom } from 'jotai';

const radioSpicyAtom = atom('');

const RadioSpicy = () => {
  const [selectedRadio, setSelectedRadio] = useAtom(radioSpicyAtom);

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  useEffect(() => {
    const savedRadioState = localStorage.getItem('radioSpicyState');
    if (savedRadioState) {
      setSelectedRadio(savedRadioState);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('radioSpicyState', selectedRadio);
  }, [selectedRadio]);

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <div className="flex flex-row">
          <input
            type="radio"
            value="radio7"
            name="radio-7"
            className="radio checked:bg-coral"
            checked={selectedRadio === 'radio7'}
            onChange={handleRadioChange}
          />
          <p className="pl-4">ไม่เผ็ด</p>
        </div>
      </label>

      <div className="divider m-0"></div>

      <label className="label cursor-pointer">
        <div className="flex flex-row">
          <input
            type="radio"
            value="radio8"
            name="radio-8"
            className="radio checked:bg-coral"
            checked={selectedRadio === 'radio8'}
            onChange={handleRadioChange}
          />
          <p className="pl-4">เผ็ดน้อย</p>
        </div>
      </label>

      <div className="divider m-0"></div>

      <label className="label cursor-pointer">
        <div className="flex flex-row">
          <input
            type="radio"
            value="radio9"
            name="radio-9"
            className="radio checked:bg-coral"
            checked={selectedRadio === 'radio9'}
            onChange={handleRadioChange}
          />
          <p className="pl-4">เผ็ดปกติ</p>
        </div>
      </label>

      <div className="divider m-0"></div>

      <label className="label cursor-pointer">
        <div className="flex flex-row">
          <input
            type="radio"
            value="radio10"
            name="radio-10"
            className="radio checked:bg-coral"
            checked={selectedRadio === 'radio10'}
            onChange={handleRadioChange}
          />
          <p className="pl-4">เผ็ดมาก</p>
        </div>
      </label>
    </div>
  );
};

export default RadioSpicy;