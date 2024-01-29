import Member from './Member';

const Greet = () => {
  const style = {
    backgroundColor: 'green',
    color: 'gold',
    border: '5px',
  };

  return (
    <>
      <div style={style}>
        <h1>Greet녕안녕안녕안녕안녕안녕안녕안녕안녕??</h1>{' '}
        <Member name="이태성" age="30" email="dlxotjds2@naver.com" />
        회원명 :<a href="/">다시 main</a>
      </div>
    </>
  );
};
export default Greet;
