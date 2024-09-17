import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Registration/Registration';
import Dashboard from './components/Dashboard/Dashboard';



function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
