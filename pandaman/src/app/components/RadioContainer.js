import React, { useEffect } from 'react';
import { atom, useAtom } from 'jotai';

const radioContainerAtom = atom('');

const RadioContainer = () => {
  const [selectedRadio, setSelectedRadio] = useAtom(radioContainerAtom);

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  useEffect(() => {
    const savedRadioState = localStorage.getItem('radioContainerState');
    if (savedRadioState) {
      setSelectedRadio(savedRadioState);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('radioContainerState', selectedRadio);
  }, [selectedRadio]);

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <div className="flex flex-row">
          <input
            type="radio"
            value="radio11"
            name="radio-11"
            className="radio checked:bg-coral"
            checked={selectedRadio === 'radio11'}
            onChange={handleRadioChange}
          />
          <p className="pl-4">ใส่จาน</p>
        </div>
      </label>

      <div className="divider m-0"></div>

      <label className="label cursor-pointer">
        <div className="flex flex-row">
          <input
            type="radio"
            value="radio12"
            name="radio-12"
            className="radio checked:bg-coral"
            checked={selectedRadio === 'radio12'}
            onChange={handleRadioChange}
          />
          <p className="pl-4">ใส่กล่อง</p>
        </div>
      </label>

    </div>
  );
};

export default RadioContainer;