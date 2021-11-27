import React from 'react';
import User from "./User";
import withUserId from "./withUserId";


// Higher order function - Функция высшего порядка
const createAdder = addBy => number => number2 => number + addBy - number2
// console.log(createAdder(3)(10)(0))



const SpecificUser = withUserId(User);

// Higher order component
const HigherOrderFunction = () => {


  return (
    <>
      <SpecificUser userId={1}/>
      <SpecificUser userId={2}/>
    </>
  )
};

export default HigherOrderFunction;