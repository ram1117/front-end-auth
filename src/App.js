import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Signin from './components/signin';
import Signup from './components/signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Juubix</h1>
      </header>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
