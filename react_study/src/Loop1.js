import Greet from './Greet';

const Loop1 = () => {
  let numbers = ['1', '2', '3', '4'];
  let Greets = numbers.map((n, i) => (
    <li key={i}>
      <Greet />
    </li>
  ));

  return (
    <>
      <div>Loop1</div>
      {Greets}
    </>
  );
};
export default Loop1;
