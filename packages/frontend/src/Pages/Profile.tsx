import React, { useEffect, useState } from 'react';
import { useUser } from '../store/useUser';
import axios from 'axios';
import Cookies from 'js-cookie';
import InputComponent from '../Components/InputComponent';
import Title from '../Components/Title';
import Button from '../Components/Button';
import Form from '../Components/Form';

const Profile: React.FC = () => {
  const { user, setUser } = useUser();
  const [error, setError] = useState('');
  

  useEffect(() => {
    const userId = Cookies.get('userId');
    const username = Cookies.get('userName');
    const email = Cookies.get('userEmail');
    const password = Cookies.get('userPassword');
console.log(userId, username, email, password);
    if (userId && username && email && password && (!user || user.id !== userId)) {
      setUser({
        id: userId,
        username: username,
        email: email,
        password: password,
      });
    }
  }, [user, setUser]);

  const updateCookies = () => {
    Cookies.set('userId', user?.id || '');
    Cookies.set('userName', user?.username || '');
    Cookies.set('userEmail', user?.email || '');
    Cookies.set('userPassword', user?.password || '');
  };
  const editDB = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/editUser/${user?.id}`, user);
      console.log('User updated successfully:', response.data);
      updateCookies();

      return response.data; 
    } catch (error: any) {
      if (error.response) {
        console.error('Error updating user:', error.response.data);
    
      } else {
        console.error('Unexpected error:', error);
      }
      setError(error.response.data.message);

    }
  };
  if (!user) {
    return <div>Loading...</div>; 
  }

  const userFields = [
    { id: 'username', label: 'Username', value: user.username || '', type: 'text' },
    { id: 'email', label: 'Email', value: user.email || '', type: 'email' },
    { id: 'password', label: 'Password', value: user.password || '', type: 'password' },
  ];

  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-center'>
      <Form>
      <Title title="Profile" />
{userFields.map((field) => (
  <InputComponent
    type={field.type}
    placeholder={field.label}
    value={field.value}
    onChange={(e) => setUser({ ...user, [field.id]: e.target.value })}
  />
))}
   <Button type="short" label="Edit" onClick={editDB}/>
      </Form>
    </div>

  );
};
export default Profile;
