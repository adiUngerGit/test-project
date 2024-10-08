import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from './Pages/Home'; 
import { useUser } from './store/useUser';
import axios from 'axios';
import '@testing-library/jest-dom'; 

jest.mock('../store/useUser', () => ({
  useUser: jest.fn(),
}));

jest.mock('axios');

describe('Home Component', () => {
  const setUser = jest.fn();

  beforeEach(() => {
    (useUser as unknown as jest.Mock).mockReturnValue({
      user: {
        id: '1',
        username: 'john_doe',
        email: 'john@example.com',
        password: 'password123',
      },
      setUser,
    });
  });

  test('renders user fields and updates state on input change', async () => {
    render(<Home />);

    const usernameInput = screen.getByLabelText('Username');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');

    expect(usernameInput).toHaveValue('john_doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(passwordInput).toHaveValue('password123');

    fireEvent.change(usernameInput, { target: { value: 'new_username' } });
    fireEvent.change(emailInput, { target: { value: 'new_email@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'new_password' } });

    expect(setUser).toHaveBeenCalledWith({
      id: '1',
      username: 'new_username',
      email: 'new_email@example.com',
      password: 'new_password',
    });
  });

  test('makes an API call to update the user when Save button is clicked', async () => {
    const mockAxiosPut = (axios.put as jest.Mock).mockResolvedValue({
      data: { message: 'User updated successfully' },
    });

    render(<Home />);

    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(mockAxiosPut).toHaveBeenCalledWith(
        'http://localhost:5000/api/editUser/1',
        {
          id: '1',
          username: 'john_doe',
          email: 'john@example.com',
          password: 'password123',
        }
      );
    });

    expect(console.log).toHaveBeenCalledWith(
      'User updated successfully:',
      { message: 'User updated successfully' }
    );
  });
});
