import React from "react";

const Test = React.memo(() => {
  console.log('Test')
  return <div style={{border: '1px solid black'}}>Test</div>;
});

export default Test;
