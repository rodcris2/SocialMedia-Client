import Home from './pages/home/Home';
import Login from './pages/home/login/Login';
import Signup from './pages/home/signup/Signup';
import Register from './pages/home/register/Register';
import LoginHelp from './pages/home/loginhelp/LoginHelp';
import Admin from './components/admin/Admin';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Listen from './pages/home/listen/Listen';
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';

function App() {
  const { user } = useContext(AuthContext);
  const admin = true;
  return (
    <Router>
      <Routes>
          <Route 
            path="/" 
            element={!user ? <Navigate to="/register"/> : <Home/>}
          />
          <Route 
            path="/register" 
            element={user ? <Navigate to="/"/> : <Register/>}
          /> 
          <Route 
            path="/login" 
            element={user ? <Navigate to="/"/> : <Login/>}
          />
          <Route 
            path="/loginhelp" 
            element={user ? <Navigate to="/"/> : <LoginHelp/>}
          />
          <Route 
            path="/signup" 
            element={<Signup/> }
          />

          {user && (<Route path='/listen' element={<Listen/>}/>)}
          <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
