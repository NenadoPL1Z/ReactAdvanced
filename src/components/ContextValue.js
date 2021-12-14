import React from 'react';
import {useTestCtx} from "./hooks/UseContext";

const ContextValue = () => {

  const test = useTestCtx();

  console.log(test);

  return (
    <div>
      <h1>ok</h1>
    </div>
  );
};

export default ContextValue;