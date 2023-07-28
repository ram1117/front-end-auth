import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Authentication from '../services/authentication.service';
import Messages from './messages';

const Signin = () => {
  const [loginCredentials, setLoginCredentials] = useState({});
  const navigate = useNavigate();
  const [message, setMessage] = useState({
    success: '',
    error: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const responseMessage = await Authentication.login(loginCredentials);
    setMessage(responseMessage);
    if (Authentication.isLoggedin()) {
      navigate('dashboard');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <div className="form-inputs-wrapper">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail address.."
            required
            onChange={handleInputChange}
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password.."
            required
            minLength={6}
            onChange={handleInputChange}
          />
          <button type="submit">Log in</button>
        </div>
      </form>
      <p>
        New user? Please
        <Link to="signup"> Sign up</Link>
      </p>
      <Messages message={message} />
    </div>
  );
};

export default Signin;
