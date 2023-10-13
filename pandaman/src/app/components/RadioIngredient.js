import { atom, useAtom } from 'jotai';

const selectedRadioAtom = atom();

const RadioIngredient = () => {
  const [selectedRadio, setSelectedRadio] = useAtom(selectedRadioAtom);

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedRadio(prevSelectedRadio => {
      if (prevSelectedRadio.includes(value)) {
        return prevSelectedRadio.filter(item => item !== value);
      } else {
        return [...prevSelectedRadio, value];
      }
    });
  };

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <div className="flex flex-row">
          <input
            type="radio"
            value="pork"
            name="radio-1"
            className="radio checked:bg-coral"
            checked={selectedRadio === 'pork'}
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
            value="chicken"
            name="radio-2"
            className="radio checked:bg-coral"
            checked={selectedRadio === 'chicken'}
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
            value="crispyPork"
            name="radio-3"
            className="radio checked:bg-coral"
            checked={selectedRadio === 'crispyPork'}
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
            value="bacon"
            name="radio-4"
            className="radio checked:bg-coral"
            checked={selectedRadio === 'bacon'}
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
      value="shrimp"
      name="radio-5"
      className="radio checked:bg-coral"
      checked={selectedRadio === 'shrimp'}
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
            value="squid"
            name="radio-6"
            className="radio checked:bg-coral"
            checked={selectedRadio === 'squid'}
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