import React, { useState } from 'react';
const Hooks = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      {value}
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        증가
      </button>
      <button onClick={() => setValue(value - 1)}>감소</button>
    </>
  );
};
export default Hooks;
