import { Navigate, useSearchParams } from 'react-router-dom';
import Login from './Login';

const Profile = () => {
  const [params, setParams] = useSearchParams();
  const isLogin = false; //로그인 여부

  if (isLogin === params.get('isLogin'))
    return <Navigate to="/login" replace={true} />;
  return (
    <>
      <div>프로필</div>
      <div>login: {params.get('isLogin')}</div>
      <div>params: {params.get('name')}</div>
      <div>id: {params.id}</div>
      <a href="/">다시 main</a>
    </>
  );
};
export default Profile;
