import Context1 from './Context1';
const ContextCunsumer2 = () => {
  return (
    <>
      <Context1.Consumer>{(Obj) => <div>{Obj.name}</div>}</Context1.Consumer>
    </>
  );
};
export default ContextCunsumer2;
