import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useUser } from '../store/useUser';
import InputComponent from '../Components/InputComponent';
import Title from '../Components/Title'
import Button from '../Components/Button';
import Error from '../Components/Error';
import Form from '../Components/Form';

const Login = () => {
  const { setUser,setIsLoggedIn } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  
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
        addToCookies(id,username);
        setUser({id,username, email, password});
        setIsLoggedIn(true);
        navigate('/');
    
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred during login. Please try again.');
    }
  };

  const addToCookies = (id: string,username: string) => {
    Cookies.set('userId', id, { expires: 1 });
    Cookies.set('userName',username, { expires: 1 });
    Cookies.set('userEmail', email, { expires: 1 });
    Cookies.set('userPassword', password, { expires: 1 }); // TODO: hash!!
  };

  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-center'>
    <Form >
    <Title title="Log In"/>
   {error && <Error message={error} />}
       <InputComponent type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
       <InputComponent type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
       <Button type='long' onClick={handleSubmit} label="Log In" ></Button>       
       <p className='text-center text-color:blue pt-2 hover:red'>Dont have an account? <Link to="/signup" className='text-color:blue hover:text-color:red'>Sign Up</Link></p>
       </Form>
   </div>
  );
};
export default Login;
