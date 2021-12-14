import React, {useMemo, useState} from 'react';

const UseMemo = () => {


  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const memoizedValue = useMemo(() => {
    return counter * 10
  }, [counter])

  return (
    <div>
      <h1>UseMemo {memoizedValue}</h1>
      <h2>Counter {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>{counter} + 1</button>
      <h2>Counter {counter2}</h2>
      <button onClick={() => setCounter2(counter2 + 1)}>{counter2} + 1</button>
    </div>
  );
};

export default UseMemo;