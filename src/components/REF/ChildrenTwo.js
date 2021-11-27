import React, {useEffect} from 'react';

const ChildrenTwo = ({callbackRef}) => {

  useEffect(() => {
    console.log(callbackRef())
  })

  return (
    <div>
      <h1>ok</h1>
    </div>
  );
};

export default ChildrenTwo;