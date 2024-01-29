// import logo from './logo.svg';
// import './App.css';

import Greet from './Greet';
import Loop1 from './Loop1';
import Loop2 from './Loop2';
import Loop3 from './Loop3';
import Count from './Count';
import Event from './Event';
import Event2 from './Event2';
import Event3 from './Event3';
import Event4 from './Event4';
import Event5 from './Event5';
import Hooks from './Hooks';
import UseCallbackTest from './UseCallbackTest';
import React, { useState } from 'react';

import ContextCunsumer from './ContextConsumer';
function App() {
  const name = 'React';
  const greet = true;
  const style = {
    backgroundColor: 'red',
    color: 'gold',
  };
  let number = ['1', '2', '3', '4'];
  const [nick, setNick] = useState('이태성');

  return (
    <>
      <ContextCunsumer />
      {number.map((n, i) => (
        <li key={i}>
          <Greet />
        </li>
      ))}
      <Event />
      <Event2 />
      <Event3 />
      <Event4 />
      <Event5 />
      <br></br>
      <Hooks />
      <UseCallbackTest />
      <Count setNick={setNick} nick={nick} />
      <Loop1 />
      <Loop2 />
      <Loop3 />
      <Greet />
      <h1>Hellow {name}</h1>
      {greet !== true ? <h2>안녕하세요</h2> : <h2>안녕하세요</h2>}
      {greet === true && <h3>안녕</h3>}
      <h2 style={style}>{name} 안녕하세용ㅇㅇㅇ</h2>
      <h2 style={{ backgroundColor: 'gold', color: 'green' }}>
        안녕하세요{name}
      </h2>
    </> //if문은 사용 불가 (조건문x 표현식o)
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}
export default App;
