import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../store/useUser';
import InputComponent from '../Components/InputComponent';
import Title from '../Components/Title'
import Button from '../Components/Button';
import Error from '../Components/Error';
import Form from '../Components/Form';

const SignUp = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser,setIsLoggedIn } = useUser();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/addUser', {
        username,
        email,
        password,
      });
        let {id, user}  = (response.data)
        id = id.toString()
       console.log(response.data)
      setUser({id, username, email, password});
      setIsLoggedIn(true);
      navigate('/');
    
    } catch (error) {
      console.error('Error signing up:', error);
      setError('Error signing up. Please try again.');
    }
  };

  return (
    <Form >
      <Title title="Sign Up" />
      <InputComponent
      placeholder='Username'
        type="text"
        value={username}
        onChange={(e) => setName(e.target.value)}
      />
      <InputComponent
      placeholder='Email'
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputComponent
      placeholder='Password'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputComponent
      placeholder='Confirm Password'
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {error && <Error message={error}/>}
      <Button type="long" label="Sign Up" />
    </Form>
  );
};

     
       

export default SignUp;
