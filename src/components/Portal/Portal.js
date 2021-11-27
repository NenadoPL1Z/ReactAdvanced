import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import Agreement from "../Agreement/Agreement";

const Portal = () => {

  const [element, setElement] = useState(document.createElement('div'));

  console.log(element.classList.add('test'))

  useEffect(() => {
    element.classList.add('test')
    document.body.append(element)
  })

  // return (ReactDOM.createPortal(<Agreement/>, el));

  return ReactDOM.createPortal(<Agreement/>, element)
};

export default Portal;