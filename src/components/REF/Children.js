import React from 'react';

const Children = React.forwardRef((props, ref) => {
  return (
    <div>
      <h1 ref={ref}>Hello</h1>
    </div>
  );
})

export default Children;