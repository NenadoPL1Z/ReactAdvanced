import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import ReactMemo from "./ReactMemo";

const Memo = () => {

  const [counter, setCounter] = useState(0);
  const arr = ['1', '2', '3', '4', '4', '5', '1', '1']

  const memoValue = useMemo(() => arr[counter], [counter])

  const handleClick = () => {

    if (counter >= 7) return setCounter(0);

    setCounter(counter + 1)
  };


  return (
    <>
      <h1>counter {counter}</h1>
      <button onClick={handleClick}>SetState</button>
      <ReactMemo title={memoValue}/>
    </>
  );
};

export default Memo;