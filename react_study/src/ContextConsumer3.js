import Context1 from './Context1';
import { useContext } from 'react';

const ContextCunsumer3 = () => {
  const { name } = useContext(Context1);

  return (
    <>
      <div>{name}</div>
    </>
  );
};
export default ContextCunsumer3;
