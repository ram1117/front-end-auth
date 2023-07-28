import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Authentication from '../services/authentication.service';
import dashboardServices from '../services/dashboard.service';

const sampleData = ['data item1', 'data item2'];
const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const dataItems = await dashboardServices.fetchData();
      setData(dataItems);
      setData(sampleData); // adding sample data for demo
    };
    getData();
  }, []);

  const handleLogout = () => {
    Authentication.logout();
    navigate('/');
  };

  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <h2>Your Dashboard</h2>
        <button type="button" onClick={handleLogout}>
          Log out
        </button>
      </div>
      <ul className="dashboard-data-list">
        {data.map((item) => (
          <li className="data-item" key={item}>
            <h3>{item}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Dashboard;
