import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Photos from './Pages/Photos';
import Login from './Pages/LogIn';
import SignUp from './Pages/LogIn';
import ShopingList from './Pages/ShopingList';
import Cookies from 'js-cookie';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('userId');
    Cookies.remove('userName');
    Cookies.remove('userEmail');
    Cookies.remove('userPassword');
    setIsLoggedIn(false);
  };

  

  return (
    <div className="App">
      { (
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
            <Link className="text-blue-500 hover:text-blue-800" to="/ShoppingList">
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

      <Routes>
        <Route path="/shoppinglist" element={<ShopingList />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} /> {/* Ensure route matches the Link in Login */}
      </Routes>
    </div>
  );
}

export default App;
