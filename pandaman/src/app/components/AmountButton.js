import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

const countAtom = atom(1);

function AmountButton() {
  const [count, setCount] = useAtom(countAtom);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    const savedCount = parseInt(localStorage.getItem('count'), 10);
    if (!isNaN(savedCount)) {
      setCount(savedCount);
    }
  }, [setCount]);

  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  return (
    <>
      <button className="btn btn-error btn-md btn-square btn-outline text-3xl text-center justify-center text-coral border-black/25" onClick={decrease}>
        -
      </button>
      <h1 className="mx-6 justify-center text-center font-bold text-xl">{count}</h1>
      <button className="btn btn-error btn-md btn-square btn-outline text-3xl text-center justify-center text-coral border-black/25" onClick={increase}>
        +
      </button>
    </>
  );
}

export default AmountButton;
