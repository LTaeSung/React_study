import React, { useState, useCallback } from 'react';
import Light from './Light';

const UseCallbackTest = () => {
  const [light, setLight] = useState(false);

  const toggle = useCallback(() => {
    console.log(light);
    setLight(!light);
  }, [light]);
  return (
    <>
      <div>{light ? 'on' : 'off'}</div>
      <div>
        <button onClick={toggle}>부모에서 토글</button>
      </div>
      <div>
        <Light togle={toggle} />
      </div>
    </>
  );
};

export default UseCallbackTest;
