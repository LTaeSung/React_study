import React, { useState } from 'react';

const Count = (props) => {
  const style = {
    width: '200px',
    heigh: '50px',
    borderRadius: '5px',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
    cursor: 'pointer',
    backgroundColor: 'skyblue',
    border: 'none',
    color: 'white',
    fontSize: '40px',
    padding: '20px',
    textAlign: 'center',
    marginLeft: '20px',
  };

  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    setNumber(number - 1);
  };

  const updateProps = () => {
    props.setNick('김길동');
  };

  const updateProps2 = () => {
    props.setNick('이태성');
  };
  return (
    <>
      <div>
        <h1>버튼 증감 + prop 변경 예제</h1>
        <br></br>
        <button onClick={increase} style={style}>
          증가
        </button>
        <button onClick={decrease} style={style}>
          감소
        </button>
      </div>
      <div>
        <h1 style={style}>{number}</h1>
      </div>
      <button onClick={updateProps} style={style}>
        prop
      </button>
      <div>
        <h1 onClick={updateProps2} style={style}>
          {props.nick}
        </h1>
      </div>
    </>
  );
};
export default Count;
