import Depth3 from './Depth3';

const Depth2 = (props) => {
  console.log('랜더링');
  return (
    <>
      <div>
        <h1>Depth2 - {props.number}</h1>
        <Depth3 number={props.number} increase={props.increase} />
      </div>
    </>
  );
};
export default Depth2;
