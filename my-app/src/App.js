import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Employees from './pages/Employees';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is my react app</h1>
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
