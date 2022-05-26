import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import NotFound from './pages/notFound/NotFound';
import { AuthContext } from './context/AuthContext';
import ActivationEmail from './pages/activationEmail/ActivationEmail';
import ProtectedRoute from './ProtectedRoute';
import { UserContextProvider } from './context/userInfo/UserContext';


const App = () => {
  const { user } = useContext(AuthContext);
  
  return (
    <>
      <Routes>
        <Route path="/" element={user ? <Navigate replace to="/home"/> : <Main /> } />
        <Route path="/login" element={user ? <Navigate replace to="/home"/> : <Login /> } />
        <Route path="/register" element={user ? <Navigate replace to="/home"/> : <Register /> } />
        <Route path="/forgotpassword" element={user ? <Navigate replace to="/home"/> : <ForgotPassword /> } />
        <Route path="/*" element={<Navigate replace to ="/notfound" /> }/>
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/user/activate/:activation_token" element={<ActivationEmail /> } />
        
        <Route path="/home" element={<ProtectedRoute/>}>
          <Route path="/home" element={<UserContextProvider><Home /></UserContextProvider>} />
        </Route>
        <Route path="/profile/:id" element={<ProtectedRoute/>}>
          <Route path="/profile/:id" element={<UserContextProvider><Profile /></UserContextProvider>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;