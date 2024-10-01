import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'; 
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Message from './Components/Massage';
import Photos from './Pages/Photos';
import Login from './Pages/LogIn';
function App() {
  const pages = [
    {
      name:  'Home',
      path: '/',
      component: <Home />
    },
    {
      name: 'Contact',
      path: '/contact',
      component: <Contact />
    },
    {
      name: 'Photos',
      path: '/photos',
      component: <Photos />
    },
    {
      name: 'Login',
      path: '/login',
      component: <Login/>
    }
  ];

  return (
    <div className="App">
      <ul className="flex">
        {pages.map((page, index) => (
          <li className="mr-6" key={index}>
            <Link className="text-blue-500 hover:text-blue-800" to={page.path}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>

      <Routes>
        {pages.map((page, index) => (
          <Route path={page.path} element={page.component} key={index} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
