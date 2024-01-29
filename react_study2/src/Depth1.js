import Depth2 from './Depth2';

const Depth1 = (props) => {
  console.log('랜더링');
  return (
    <>
      <div>
        <h1>Depth1 - {props.number}</h1>
        <Depth2 number={props.number} increase={props.increase} />
      </div>
    </>
  );
};
export default Depth1;
