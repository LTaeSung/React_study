import { useSelector, useDispatch } from 'react-redux';

const Depth3 = (props) => {
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>Depth3 - {number}</h1>
        <button
          onClick={() => {
            dispatch({ type: 'INCREASE' });
          }}
        >
          증가
        </button>
      </div>
    </>
  );
};
export default Depth3;
