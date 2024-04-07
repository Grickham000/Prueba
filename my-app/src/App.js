import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Employees from './pages/Employees';

function App() {
  return (
    <div className="App">



      <header className="App-header">
        <h2>This is my react app</h2>
      </header>

      <Router>
      <Routes>
        <Route path="/employees" element={<Employees />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
