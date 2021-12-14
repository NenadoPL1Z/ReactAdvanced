import React, {useReducer} from 'react';

const UseReducer = () => {


  function init(initialCount) {
    return {count: initialCount}
  }


  const initialState = {count: 0}

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {...state, count: state.count + 1}
      case 'decrement':
        return {...state, count: state.count - 1}
      case 'reset':
        return init(action.payload)
      default:
        return state
    }
  }


  const [state, dispatch] = useReducer(reducer, initialState);





  return (
    <div>
      <h1>UseReducer</h1>
      <h1>Count {state.count}</h1>
      <button onClick={() => dispatch({type: 'decrement'})}>-1</button>
      <button onClick={() => dispatch({type: 'increment'})}>+1</button>
      <button onClick={() => dispatch({type: 'reset', payload: 0})}>0</button>
    </div>
  );
};

export default UseReducer;