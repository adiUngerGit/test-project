import React, { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Sign up with:', { name, email, password });
  };

  return (
   <div>
    <p>S</p>
   </div>
  );
};

export default SignUp;
