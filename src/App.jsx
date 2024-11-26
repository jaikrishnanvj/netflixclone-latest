import React, { useEffect } from 'react'
import Home from './Pages/Home/Home'
import Player from './Pages/Player/Player';
import { useLocation } from 'react-router-dom';
import Login from './Pages/Login/Login'
import { Routes,Route, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  const App = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Get the current route location
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        // Don't redirect if the current location is "/player/:id"
        if (location.pathname.includes('/player/') || location.pathname === '/login') {
          return; // Skip the redirect logic for player pages and login page
        }
  
        if (user) {
          console.log('Logged in successfully');
          navigate('/'); // Go to Home if logged in
        } else {
          console.log('Logged out');
          navigate('/login'); // Go to Login if logged out
        }
      });
  
      return () => unsubscribe(); // Cleanup the listener
    }, [navigate, location]);
  
  
  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
      
    </div>
  )
}

export default App
