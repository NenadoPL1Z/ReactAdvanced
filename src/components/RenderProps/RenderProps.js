import React from 'react';
import TestRender from "./TestRender";

const RenderProps = () => {
  return (
    <div>
        <TestRender render={data => (
          <h1>Custom render</h1>
        )}/>
    </div>
  );
};

export default RenderProps;