import { useState } from 'react';
import { Link } from 'react-router-dom';
import Messages from './messages';

const Signin = () => {
  const [loginCredentials, setLoginCredentials] = useState({});
  const [message, setMessage] = useState({
    success: '',
    error: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage({
      ...message,
      success: 'Succesfully signed in',
      error: 'error message',
    });
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
