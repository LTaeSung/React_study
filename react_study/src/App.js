import ContextCunsumer from './ContextConsumer';
import ContextCunsumer2 from './ContextConsumer2';
import ContextCunsumer3 from './ContextConsumer3';
import React, { useState } from 'react';
import Context1 from './Context1';

const App = () => {
  const [value, setValue] = useState({ name: '이태성' });
  return (
    <>
      <Context1.Provider value={value}>
        <ContextCunsumer />
        <ContextCunsumer2 />
        <ContextCunsumer3 />
      </Context1.Provider>
      <ContextCunsumer />
      <button onClick={() => setValue({ name: '홍길동' })}>홍길동</button>
      <button onClick={() => setValue({ name: '강감찬' })}>강감찬</button>
    </> //if문은 사용 불가 (조건문x 표현식o)
  );
};
export default App;
