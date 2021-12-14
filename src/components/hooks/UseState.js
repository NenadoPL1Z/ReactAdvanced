import React, {useState} from 'react';

const UseState = () => {

  const [counter, setCounter] = useState(0);

  const handleChange = (number) => {
    setCounter(prev => prev + number)
  }

  return (
    <div>
      <h1>UseState Counter {counter}</h1>
      <button onClick={() => handleChange(1)}>+1</button>
      <button onClick={() => handleChange(-1)}>-1</button>
    </div>
  );
};

export default UseState;