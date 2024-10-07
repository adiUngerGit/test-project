import React from 'react';
import { useUser } from '../store/useUser';
import axios from 'axios';

const Home: React.FC = () => {
  const { user, setUser } = useUser();

  const editDB = async () => {
    console.log(user)
    try {
      const response = await axios.put(`http://localhost:5000/api/editUser/${user.id}`, user);
      
      console.log('User updated successfully:', response.data);
      
      return response.data; 
  } catch (error) {
      if (axios.isAxiosError(error)) {
          console.error('Error updating user:', error.response?.data);
      } else {
          console.error('Unexpected error:', error);
      }
  }  
  };

 
  const userFields = [
    { id: 'username', label: 'Username', value: user.username, type: 'text' },
    { id: 'email', label: 'Email', value: user.email, type: 'email' },
    { id: 'password', label: 'Password', value: user.password, type: 'password' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Edit Profile</h2>
        <div className="space-y-4">
          {userFields.map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="block text-sm font-medium text-gray-600">
                {field.label}
              </label>
              <input
                id={field.id}
                type={field.type}
                value={field.value}
                className={`w-full p-2 border border-gray-300 rounded-lg }`}
                onChange={(e) => setUser({ ...user, [field.id]: e.target.value })}
              />
            </div>
          ))}
        </div>
        <button onClick={() => editDB()} className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600 transition duration-300">Save</button>
      </div>
    </div>
  );
};

export default Home;
