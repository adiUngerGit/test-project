// src/Pages/UploadPage.tsx
import React from 'react';
import UploadForm from '../Components/UploudForm';

const UploadPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Upload Your Photo</h1>
        <UploadForm />
      </div>
    </div>
  );
};

export default UploadPage;
