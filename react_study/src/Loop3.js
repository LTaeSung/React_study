import Greet from './Greet';

const Loop3 = () => {
  let numbers = ['1', '2', '3', '4'];

  return (
    <>
      <div>Loop3</div>
      {numbers.map((n, i) => (
        <li key={i}>
          <Greet />
        </li>
      ))}
    </>
  );
};

export default Loop3;
