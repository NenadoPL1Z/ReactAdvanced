import React, {useEffect, useState} from 'react';
import axios from "axios";

const withTodoId = Component => {
  const NewComponent = ({todoId, ...props}) => {

    const [todo, setTood] = useState('');

    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(r => setTood(r.data));
    }, [])

    if (!todo) return 'Loading....'

    return <Component {...props} todo={todo} />
  }

  return NewComponent
}

export default withTodoId