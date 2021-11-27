import React from 'react';
import Item from "./Item";
import withTodoId from "./withTodoId";


const Todo = withTodoId(Item);

const HocRepeat = () => {
  return (
    <div>
      <Todo todoId={1}/>
      <Todo todoId={2}/>
      <Todo todoId={3}/>
      <Todo todoId={4}/>
      <Todo todoId={5}/>
    </div>
  );
};

export default HocRepeat;