import React, {useCallback, useEffect, useState} from 'react';

const UseCallback = () => {


  const [count, setCount] = useState(0);

  // Мемоизированный колбек, который вызывается, только при изменении зависимостей
  const memoizedCallback = useCallback(
    () => {
      console.log(count)
    }, [count],
  )

  useEffect(() => {
    memoizedCallback()
  })

  return (
    <div>
      <h1>UseCallback {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>+1</button>
      <button onClick={() => setCount(count)}>+1</button>
    </div>
  );
};

export default UseCallback;