import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const move = () => {
    navigate('/greet');
  };

  return (
    <>
      <div>
        <h1>Main</h1>
        <a href="/intro">소개</a>
        <br></br>
        <Link to="/intro">소개</Link>
        <br />
        <h2>라우터 변수 방식</h2>
        <Link to="/profile/홍길동">홍길동</Link>
        <br />
        <Link to="/profile/이태성">이태성</Link>
        <h2>파라미터 방식</h2>
        <Link to="/profile2?a=1&b=2&c=3">프로필2</Link>
      </div>
      <button onClick={move}>페이지 이동</button>
    </>
  );
};
export default Main;
