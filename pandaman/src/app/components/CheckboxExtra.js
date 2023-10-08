import React, { useEffect, useState } from 'react';
import { atom, useAtom } from 'jotai';

const checkboxExtraAtom = atom(false);

const CheckboxExtra = () => {
  const [isChecked, setIsChecked] = useAtom(checkboxExtraAtom);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const savedCheckboxState = localStorage.getItem('checkboxSpicyState');
    if (savedCheckboxState) {
      setIsChecked(savedCheckboxState === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('checkboxSpicyState', isChecked);
  }, [isChecked]);

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <div className="flex flex-row">
          <input
            type="checkbox"
            className="checkbox checkbox-coral checked:bg-coral"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="pl-4">พิเศษ</p>
        </div>
        <span className="label-text flex flex-row items-end">
          <p className="text-gray-500">฿</p>
          <p className="font-bold pl-1">10</p>
        </span>
      </label>
    </div>
  );
};

export default CheckboxExtra;