// src/Components/PreviewImage.tsx
import React from 'react';

interface PreviewImageProps {
  file: File | null;
}

const PreviewImage: React.FC<PreviewImageProps> = ({ file }) => {
  if (!file) {
    return null;
  }

  const imageUrl = URL.createObjectURL(file);

  return (
    <div className="mb-4">
      <img src={imageUrl} alt="Preview" className="w-full h-auto rounded-lg shadow-md" />
    </div>
  );
};

export default PreviewImage;
