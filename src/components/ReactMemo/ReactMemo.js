import React, {useEffect, useState} from 'react';

const ReactMemo = React.memo(({title}) => {

  console.log(title)

  return (
    <div>
      <h1>Rerender Title {title}</h1>
    </div>
  );
})

export default ReactMemo;