import React, {useEffect, useState} from 'react';
import Mounting from "../Mounting";

const UseEffect = () => {

  const [toggle, setToggle] = useState(true);



  return (
    <div>
      <h1>UseEffect</h1>
      <h1>Toggle {toggle + ''}</h1>
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      {toggle && <Mounting/>}
    </div>
  );
};

export default UseEffect;