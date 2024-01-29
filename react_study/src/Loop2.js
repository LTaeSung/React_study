import Greet from './Greet';

const Loop2 = () => {
  let numbers = ['1', '2', '3', '4'];
  let Greets = [];
  for (let i = 0; i < numbers.length; i++) {
    Greets[i] = (
      <li key={i}>
        <Greet />
      </li>
    );
  }

  return (
    <>
      <div>Loop2</div>
      {Greets}
    </>
  );
};
export default Loop2;
