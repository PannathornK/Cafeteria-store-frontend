import React from 'react';
import { useAtom } from 'jotai'
import { atom } from 'jotai'

const checkboxEggAtom1 = atom(false);
const checkboxEggAtom2 = atom(false);

const CheckboxEgg = () => {
  const [isChecked1, setIsChecked1] = useAtom(checkboxEggAtom1);
  const [isChecked2, setIsChecked2] = useAtom(checkboxEggAtom2);

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <div className="flex flex-row">
          <input
            type="checkbox"
            className="checkbox checkbox-coral checked:bg-coral"
            checked={isChecked1}
            onChange={handleCheckboxChange1}
          />
          <p className="pl-4">ไข่ดาว</p>
        </div>
      </label>
      <label className="label cursor-pointer">
        <div className="flex flex-row">
          <input
            type="checkbox"
            className="checkbox checkbox-coral checked:bg-coral"
            checked={isChecked2}
            onChange={handleCheckboxChange2}
          />
          <p className="pl-4">ไข่เจียว</p>
        </div>
      </label>
    </div>
  );
};

export default CheckboxEgg;