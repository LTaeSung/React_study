import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div>
        <header>해더</header>
        <div>
          <Outlet />
        </div>
        <footer>푸터</footer>
      </div>
    </>
  );
};

export default Layout;
