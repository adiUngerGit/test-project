// // src/Components/UploadButton.tsx
// import React, { ChangeEvent } from 'react';

// interface UploadButtonProps {
//   onImageSelect: (file: File) => void;
// }

// const UploadButton: React.FC<UploadButtonProps> = ({ onImageSelect }) => {
//   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       onImageSelect(e.target.files[0]); // Pass the selected file to the parent
//     }
//   };

//   return (
//     <div className="mb-4">
//       <label
//         htmlFor="fileInput"
//         className="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300"
//       >
//         Select Photo
//       </label>
//       <input
//         type="file"
//         id="fileInput"
//         accept="image/*"
//         className="hidden"
//         onChange={handleImageChange}
//       />
//     </div>
//   );
// };

// export default UploadButton;
