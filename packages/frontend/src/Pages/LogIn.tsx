import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        email,
        password,
      });

      addToCookies(response.data.user.id);
      // Redirect to home after successful login
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const addToCookies = (id: string) => {
    Cookies.set('userId', id, { expires: 1 });
    Cookies.set('userName', username, { expires: 1 });
    Cookies.set('userEmail', email, { expires: 1 });
    Cookies.set('userPassword', password, { expires: 1 }); // TODO: hash!!
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Link to Sign Up */}
        <p className="text-center mt-4">
          Don't have an account?{' '}
          <Link to="/SignUp" className="text-blue-500 hover:text-blue-800" > {/* All lowercase */}
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
