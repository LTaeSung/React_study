import Depth1 from './Depth1';
import { useState } from 'react';
import './AppRedux.css';
import { createStore } from 'redux';
import { Provider, setSelector, useDispatch } from 'react-redux';
import Axios from './Axios1';



const AppRedux = () => {
  function reducer(state, action) {
    if (state === undefined) {
      return { number: 1 };
    }

    const state2 = { ...state };
    if (action.type === 'INCREASE') {
      state2.number++;
    }
    return state2;
  }
  const store = createStore(reducer);
  return (
    <>
      <h1>AppRedux</h1>
      <Provider store={store}>
        <Depth1 />
        <Axios />
      </Provider>
    </>
  );
};
export default AppRedux;
//   const [number, setNumber] = useState(0);
//   const increase = () => {
//     setNumber(number + 1);
//   };
//   return (
//     <>
//       <h1>AppRedux</h1>
//       <Depth1 number={number} increase={increase} />
//     </>
//   );
// };
// export default AppRedux;
