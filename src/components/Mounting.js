import React, {useEffect} from 'react';

const Mounting = () => {

  useEffect(() => {
    console.log('mounting')
    return () => {
      console.log('unmounting')
    }
  }, [])


  return (
    <div>
      <h1>ok</h1>
    </div>
  );
};

export default Mounting;