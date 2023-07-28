import axios from 'axios';

const dashboardUrl = 'http://localhost:3000/api/v1/dashboard';

const fetchData = () => axios.get(dashboardUrl)
  .then((response) => response.data)
  .catch((error) => error);

const dashboardServices = { fetchData };
export default dashboardServices;
