import React, { useEffect, useState } from 'react';

function Textarea() {
  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('inputValue') || '';
    } else {
      return '';
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('inputValue', value);
    }
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <textarea
      className="textarea textarea-bordered mt-2"
      placeholder="เช่น ไม่ใส่ผัก"
      onChange={handleChange}
      value={value}
    />
  );
}

export default Textarea;