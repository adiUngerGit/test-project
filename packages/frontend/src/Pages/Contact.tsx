import { useState } from 'react';
import React from 'react';
import axios from 'axios';

const Contact = () => {
  const [info, setInfo] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // Fetch data from the server using axios
  function getFromServer() {
    axios
      .get('http://localhost:5000/api/info')
      .then((response) => {
        setInfo(response.data.message); // Set the fetched message
        console.log(response.data.message); // Log the response message
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  // Send data to the server using axios
  function sendToServer() {
    axios
      .post('http://localhost:5000/api/message', { message })
      .then((response) => {
        console.log('Message sent:', response.data); // Log the server response
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  }

  return (
    <div>
      <input
        className='border p-2 mb-4'
        placeholder='Enter your message here'
        value={message}
        onChange={(e) => setMessage(e.target.value)} 
      />
      <button className='p-2 bg-blue-500 text-white' onClick={sendToServer}>
        SEND
      </button>

      <h1>{info}</h1>
      <button className='p-2 bg-green-500 text-white' onClick={getFromServer}>
        Get our Info
      </button>
    </div>
  );
};

export default Contact;
