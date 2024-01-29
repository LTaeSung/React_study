import { Link } from 'react-router-dom';

const Login = () => {
  const isLogin = false;
  return (
    <>
      <div>로그인 페이지</div>
      <a href="/">나가기</a>
      <br />
      <Link to="/profile/?홍길동&isLogin=true">홍길동 으로 로그인</Link>
      <br />
      <Link to="/profile/?이태성&isLogin=true">이태성 으로 로그인</Link>
    </>
  );
};
export default Login;
