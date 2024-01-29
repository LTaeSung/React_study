const Light = ({ toggle }) => {
  console.log('랜더링 진행 중?');
  return (
    <>
      <button onClick={toggle}>토글</button>
    </>
  );
};
export default Light;
