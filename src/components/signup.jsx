import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Authentication from '../services/authentication.service';
import Messages from './messages';

const Signup = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const [message, setMessage] = useState({
    success: '',
    error: '',
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    if (userData.password !== userData.password1) {
      setMessage({
        ...message,
        error: "Passwords don't match. Please try again",
      });
    } else {
      const responseMessage = await Authentication.signup(userData);
      setMessage(responseMessage);
      navigate('/');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <h2>Create New Account</h2>
      <form onSubmit={handleSignup}>
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
            onChange={handleInputChange}
            minLength={6}
          />
          <input
            type="password"
            id="password1"
            name="password1"
            placeholder="Confirm Password.."
            required
            onChange={handleInputChange}
            minLength={6}
          />
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <p>
        Already a member? Please
        <Link to="/"> Sign in</Link>
      </p>
      <Messages message={message} />
    </div>
  );
};

export default Signup;
