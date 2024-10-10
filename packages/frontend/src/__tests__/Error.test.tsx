import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Error from "../Components/Error";

describe('Error component', () => {
  it('renders the error message correctly', () => {
    const errorMessage = 'Something went wrong!';

    render(<Error message={errorMessage} />);

    // Check if the message is displayed correctly
    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();

  });
});
