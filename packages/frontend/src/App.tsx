import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Photos from './Pages/UploudImage';
import Login from './Pages/LogIn';  // Correct path for the Login component
import SignUp from './Pages/SignUp'; // Correct path for the SignUp component
import ShoppingList from './Pages/ShopingList';
import Cookies from 'js-cookie';
import {useUser} from './store/useUser';

function App() {
  const navigate = useNavigate();
  const {isLoggedIn, setIsLoggedIn} = useUser();

  useEffect(() => {
    console.log(Cookies.get('userId'));
    if (Cookies.get('userId')) {
      setIsLoggedIn(true);
      navigate('/');
    } else {
     navigate('/login'); 
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    Cookies.remove('userId');
    Cookies.remove('userName');
    Cookies.remove('userEmail');
    Cookies.remove('userPassword');
    setIsLoggedIn(false);
    navigate('/login'); 
  };

  return (
    <div className="App">
      <nav>
        {isLoggedIn && (
          <ul className="flex">
            <li className="mr-6">
              <Link className="text-blue-500 hover:text-blue-800" to="/">
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-blue-500 hover:text-blue-800" to="/contact">
                Contact
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-blue-500 hover:text-blue-800" to="/photos">
                Photos
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-blue-500 hover:text-blue-800" to="/shoppinglist">
                Shopping List
              </Link>
            </li>
            <li className="mr-6">
              <button className="text-red-500 hover:text-red-800" onClick={handleLogout}>
                Log Out
              </button>
            </li>
          </ul>
        )}
      </nav>

      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/login" />} />
        <Route path="/photos" element={isLoggedIn ? <Photos /> : <Navigate to="/login" />} />
        <Route path="/shoppinglist" element={isLoggedIn ? <ShoppingList /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
