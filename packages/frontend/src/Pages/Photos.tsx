import React from 'react'
import PhotoUpload from '../Components/PhotoUpload'

const UploudPhotos = () => {

  const handleFileUpload = (file: File) => {
    // Handle the file upload process (e.g., sending the file to the server)
    console.log('File uploaded:', file);
  };

  return (
    <div>
       <h1>Photo Upload Component</h1>
      {/* <PhotoUpload onFileUpload={handleFileUpload} /> */}
    </div>
  )
}

export default UploudPhotos
