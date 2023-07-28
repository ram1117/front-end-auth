import { Link, Outlet } from 'react-router-dom';
import Authentication from '../services/authentication.service';

const Protected = () => {
  if (!Authentication.isLoggedin()) {
    return (
      <>
        <h2>Access Forbidden.</h2>
        <p>
          Please Login
          <Link to="/"> Login Page</Link>
        </p>
      </>
    );
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default Protected;
