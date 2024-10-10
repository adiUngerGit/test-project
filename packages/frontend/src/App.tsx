import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Login from './Pages/LogIn';  
import SignUp from './Pages/SignUp'; 
import ShoppingList from './Pages/ShopingList';
import Cookies from 'js-cookie';
import {useUser} from './store/useUser';
import ItemListPage from './Pages/ItemListPage';
import Profile from './Pages/Profile';
import BarItem from './Components/BarItem';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  const navigate = useNavigate();
  const {isLoggedIn, setIsLoggedIn} = useUser();

  useEffect(() => {
    console.log(Cookies.get('userId'));
    if (Cookies.get('userId')) {
      setIsLoggedIn(true);
      navigate('/');
    } else {
      setIsLoggedIn(false);
     navigate('/login'); 
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    Cookies.remove('userId');
    Cookies.remove('username');
    Cookies.remove('userEmail');
    Cookies.remove('userPassword');
    setIsLoggedIn(false);
    navigate('/login'); 
  };

  return (
    <div className="App">
      <nav>
        {isLoggedIn && (
        <ul>
          <BarItem title="Home" to="/"/>
          <BarItem title="Profile" to="/profile"/>
          <BarItem title="Contact" to="/contact"/>
          <BarItem title="Photos" to="/photos"/>
          <BarItem title="Shopping List" to="/shoppinglist"/>
          <BarItem title="Items" to="/items"/>
          <BarItem logOut={true} title="Logout" to="/login" onClick={handleLogout}/>
          </ul>

          

        )}
      </nav>

      <Routes>
      <Route element={<ProtectedRoute isAuthenticated={isLoggedIn} />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shoppinglist" element={<ShoppingList />} />
        <Route path="/items" element={<ItemListPage />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

    </Routes>
    </div>
  );
}

export default App;
