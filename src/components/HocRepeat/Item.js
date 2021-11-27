import React, {useState} from 'react';

const Item = ({todo}) => {


  const [value, setValue] = useState(todo.completed)

  return (
    <div>
        <span>{todo.title}</span><input type='checkbox' onChange={() => setValue(!value)} checked={value}/>
    </div>
  );
};

export default Item;