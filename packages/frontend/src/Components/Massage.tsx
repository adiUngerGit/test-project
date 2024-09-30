import React, { FC, useState } from 'react';
interface Props {
  messageApp: string; 
}

const Message: FC<Props> = ({ messageApp }) => {  

  const [serverMassage, setServerMassage] = useState<string>(''); 

  function getFromServer() {
    return fetch('http://localhost:5000/api/message')
      .then((res) => res.json())
      .then((res) => setServerMassage(res.message));
  }
  return (
    <div>
      <h1>{messageApp}</h1>
      <h1>{serverMassage}</h1>
      <button onClick={getFromServer} className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Get Message</button>
    </div>
  );
};

export default Message;
