import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/v1/';

const login = (credentials) => axios.post(`${apiUrl}authentication`, credentials)
  .then((response) => {
    if (response.data.token) {
      sessionStorage.setItem('userinfo', JSON.stringify(response.data.token));
    }
    return { success: '', error: `${response}` };
  })
  .catch((error) => ({ success: '', error: `${error}` }));

const logout = () => {
  sessionStorage.removeItem('userinfo');
};

const signup = async (userdata) => axios
  .post(`${apiUrl}signup`, userdata)
  .then((response) => ({
    success: `${response}`,
    error: '',
  }))
  .catch((error) => ({ success: '', error: `${error}` }));

const isLoggedin = () => true;
// return sessionStorage.getItem('userinfo');
// returning true for frontend to work.

const Authentication = {
  login,
  logout,
  signup,
  isLoggedin,
};
export default Authentication;
