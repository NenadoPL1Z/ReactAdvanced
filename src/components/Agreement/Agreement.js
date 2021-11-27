import React, {useEffect, useRef, useState} from 'react';

const Agreement = () => {

  const [counter, setCounter] = useState(0);
  const currentRender = useRef(0);


  useEffect(() => {
    if (counter) {
      currentRender.current += 1
    }
  })


  return (
    <div>
      <h1>Согласование</h1>
      <h1>Counter {counter}</h1>
      <h1>Current Render {currentRender.current}</h1>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
      <button onClick={() => setCounter(counter)}>0</button>
    </div>
  );
};

export default Agreement;