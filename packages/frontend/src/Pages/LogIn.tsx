import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { sign } from 'crypto';
import { useUser } from '../store/useUser';

const Login = () => {
  const { setUser,setIsLoggedIn } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // State for handling errors
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); 

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });
      console.log(response.data)
      const {id, username} = response.data.user
        addToCookies(id);
        setUser({id,username, email, password});
        setIsLoggedIn(true);
        navigate('/');
    
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred during login. Please try again.');
    }
  };

  const addToCookies = (id: string) => {
    Cookies.set('userId', id, { expires: 1 });
    Cookies.set('userEmail', email, { expires: 1 });
    Cookies.set('userPassword', password, { expires: 1 }); // TODO: hash!!
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error message */}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button onClick={handleSubmit}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Link to Sign Up */}
        <p className="text-center mt-4">
          Don't have an account?{' '}
          <button
  onClick={(e) => {
    e.preventDefault();  
    navigate('/signup');
  }}
  className="text-blue-500 hover:text-blue-800"
>
  Sign Up
</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
