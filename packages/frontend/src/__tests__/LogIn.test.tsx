// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import Login from '../Pages/Login';
// import { useUser } from '../store/useUser';

// // Mock useUser, axios, and js-cookie
// jest.mock('axios');
// jest.mock('js-cookie');
// jest.mock('../store/useUser');

// // Mock react-router-dom's useNavigate
// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'), // Preserve other functions in react-router-dom
//   useNavigate: jest.fn(), // Mock useNavigate
// }));

// describe('Login Component', () => {
//   const mockSetUser = jest.fn();
//   const mockSetIsLoggedIn = jest.fn();
//   const mockNavigate = jest.fn();

//   beforeEach(() => {
//     // Mock useUser hook
//     (useUser as jest.Mock).mockReturnValue({
//       setUser: mockSetUser,
//       setIsLoggedIn: mockSetIsLoggedIn,
//     });

//     // Mock useNavigate
//     (require('react-router-dom').useNavigate as jest.Mock).mockImplementation(() => mockNavigate);
//   });

//   afterEach(() => {
//     jest.clearAllMocks();  // Clear mocks after each test
//   });

//   // Test 1: Check if the form renders correctly
//   it('renders login form with email and password fields', () => {
//     render(
//       <BrowserRouter>
//         <Login />
//       </BrowserRouter>
//     );

//     // Check for email and password fields
//     expect(screen.getByLabelText('Email')).toBeInTheDocument();
//     expect(screen.getByLabelText('Password')).toBeInTheDocument();
    
//     // Check for the login button
//     expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
//   });

//   // Test 2: Simulate filling form inputs
//   it('allows users to fill email and password inputs', () => {
//     render(
//       <BrowserRouter>
//         <Login />
//       </BrowserRouter>
//     );

//     const emailInput = screen.getByLabelText('Email');
//     const passwordInput = screen.getByLabelText('Password');

//     // Simulate user input
//     fireEvent.change(emailInput, { target: { value: 'testuser@example.com' } });
//     fireEvent.change(passwordInput, { target: { value: 'password123' } });

//     // Assert that the input values are updated
//     expect(emailInput).toHaveValue('testuser@example.com');
//     expect(passwordInput).toHaveValue('password123');
//   });

//   // Test 3: Simulate a successful login submission
//   it('handles successful login and sets user data', async () => {
//     const mockResponse = {
//       data: {
//         user: { id: '1', username: 'testuser' },
//       },
//     };

//     // Mock axios.post to resolve with mockResponse
//     (axios.post as jest.Mock).mockResolvedValueOnce(mockResponse);

//     render(
//       <BrowserRouter>
//         <Login />
//       </BrowserRouter>
//     );

//     // Simulate filling the form
//     fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'testuser@example.com' } });
//     fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });
    
//     fireEvent.click(screen.getByRole('button', { name: /login/i }));

//     // Verify axios.post was called with correct data
//     await waitFor(() => {
//       expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/api/login', {
//         email: 'testuser@example.com',
//         password: 'password123',
//       });
//     });

//     // Check if cookies were set
//     await waitFor(() => {
//       expect(Cookies.set).toHaveBeenCalledWith('userId', '1', { expires: 1 });
//       expect(Cookies.set).toHaveBeenCalledWith('userName', 'testuser', { expires: 1 });
//       expect(Cookies.set).toHaveBeenCalledWith('userEmail', 'testuser@example.com', { expires: 1 });
//       expect(Cookies.set).toHaveBeenCalledWith('userPassword', 'password123', { expires: 1 });
//     });

//     // Check if setUser and setIsLoggedIn were called
//     expect(mockSetUser).toHaveBeenCalledWith({
//       id: '1',
//       username: 'testuser',
//       email: 'testuser@example.com',
//       password: 'password123',
//     });
//     expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);

//     // Check if the user is redirected to the homepage
//     expect(mockNavigate).toHaveBeenCalledWith('/');
//   });

//   // Test 4: Handle login error
//   it('displays an error message when login fails', async () => {
//     const mockError = new Error('Login failed');
//     (axios.post as jest.Mock).mockRejectedValueOnce(mockError);

//     render(
//       <BrowserRouter>
//         <Login />
//       </BrowserRouter>
//     );

//     // Simulate filling the form
//     fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'testuser@example.com' } });
//     fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'wrongpassword' } });
    
//     fireEvent.click(screen.getByRole('button', { name: /login/i }));

//     // Check if axios.post was called with incorrect data
//     await waitFor(() => {
//       expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/api/login', {
//         email: 'testuser@example.com',
//         password: 'wrongpassword',
//       });
//     });

//     // Check for the error message
//     expect(screen.getByText('An error occurred during login. Please try again.')).toBeInTheDocument();
//   });

//   // Test 5: Navigate to Sign Up
//   it('navigates to sign up page when Sign Up is clicked', () => {
//     render(
//       <BrowserRouter>
//         <Login />
//       </BrowserRouter>
//     );

//     // Simulate clicking the "Sign Up" button
//     fireEvent.click(screen.getByText('Sign Up'));

//     // Ensure navigation to the sign-up page
//     expect(mockNavigate).toHaveBeenCalledWith('/signup');
//   });
// });
