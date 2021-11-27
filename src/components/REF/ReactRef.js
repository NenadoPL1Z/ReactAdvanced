import React, {useEffect, useRef} from 'react';
import Children from "./Children";
import ChildrenTwo from "./ChildrenTwo";

const ReactRef = () => {

  const testRef = useRef();

  useEffect(() => {
    testRef.current.style.color = 'red'
  }, [testRef])


  const callbackRef = () => {
    return testRef.current
  }

  return (
    <div>
      <Children ref={testRef}/>
      <ChildrenTwo callbackRef={callbackRef}/>
    </div>
  );
};

export default ReactRef;