// src/Components/UploadForm.tsx
import React, { useState } from 'react';
import UploadButton from './UploadButton';
import PreviewImage from './PreviewImage';

const UploadForm: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageSelect = (file: File) => {
    setSelectedImage(file); // Store the selected file in state
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedImage) {
      alert('Please select an image to upload.');
      return;
    }

    // Simulate uploading the image (you could make an API request here)
    console.log('Uploading image:', selectedImage);

    // Clear the form after submission
    setSelectedImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <UploadButton onImageSelect={handleImageSelect} />
      <PreviewImage file={selectedImage} />
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
      >
        Upload Photo
      </button>
    </form>
  );
};

export default UploadForm;
