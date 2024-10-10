import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Button from '../Components/Button'; 

describe('Button component', () => {
  it('renders the button with the correct label', () => {
    render(<Button label="Click me" />);

    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();

    render(<Button label="Click me" onClick={handleClick} />);

    const buttonElement = screen.getByText('Click me');
    
    // Simulate a click event on the button
    userEvent.click(buttonElement);

    // Check if the onClick handler was called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
