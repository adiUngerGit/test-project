// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import Home from '../Pages/Home';
// import { useUser } from '../store/useUser';
// import axios from 'axios';

// // Mocking axios and useUser hook
// jest.mock('axios');
// jest.mock('../store/useUser');

// describe('Home page', () => {
//   const mockSetUser = jest.fn();
//   const mockUser = {
//     id: 1,
//     username: 'testuser',
//     email: 'testuser@example.com',
//     password: 'password123',
//   };

//   beforeEach(() => {
//     (useUser as jest.Mock).mockReturnValue({
//       user: mockUser,
//       setUser: mockSetUser,
//     });
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   // Test 1: Render check for Edit Profile title
//   it('renders correctly', () => {
//     render(<Home />);
//     expect(screen.getByText('Edit Profile')).toBeInTheDocument();
//   });

//   // Test 2: Render check for user fields
//   it('renders user fields', () => {
//     render(<Home />);
    
//     const usernameField = screen.getByLabelText('Username');
//     const emailField = screen.getByLabelText('Email');
//     const passwordField = screen.getByLabelText('Password');
    
//     expect(usernameField).toBeInTheDocument();
//     expect(emailField).toBeInTheDocument();
//     expect(passwordField).toBeInTheDocument();
//   });

//   // Test 3: Simulate input changes for form fields
//   it('updates user fields on input change', () => {
//     render(<Home />);

//     const usernameField = screen.getByLabelText('Username');
//     fireEvent.change(usernameField, { target: { value: 'newusername' } });
    
//     // Ensure setUser is called with updated username
//     expect(mockSetUser).toHaveBeenCalledWith({ ...mockUser, username: 'newusername' });
//   });

//   // Test 4: Test clicking Save button and axios call
//   it('sends PUT request when Save button is clicked', async () => {
//     const mockResponse = { data: { success: true } };
//     (axios.put as jest.Mock).mockResolvedValue(mockResponse);
    
//     render(<Home />);

//     // Click the Save button
//     const saveButton = screen.getByText('Save');
//     fireEvent.click(saveButton);

//     // Wait for the axios call
//     await waitFor(() => {
//       expect(axios.put).toHaveBeenCalledWith(
//         `http://localhost:5000/api/editUser/${mockUser.id}`,
//         mockUser
//       );
//     });

//     // Check that axios.put was called once
//     expect(axios.put).toHaveBeenCalledTimes(1);
//   });

//   // Test 5: Handle axios error
//   it('handles axios error', async () => {
//     const mockError = new Error('Failed to update user');
//     (axios.put as jest.Mock).mockRejectedValue(mockError);
    
//     render(<Home />);

//     // Click the Save button
//     const saveButton = screen.getByText('Save');
//     fireEvent.click(saveButton);

//     // Wait for the axios call
//     await waitFor(() => {
//       expect(axios.put).toHaveBeenCalledWith(
//         `http://localhost:5000/api/editUser/${mockUser.id}`,
//         mockUser
//       );
//     }); 
  

// });
// });