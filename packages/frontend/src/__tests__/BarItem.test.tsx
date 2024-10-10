import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';  
import CustomLink from '../Components/BarItem';

describe('CustomLink component', () => {
  it('renders the link with the correct title', () => {
    render(
      <BrowserRouter>
        <CustomLink to="/home" title="Home" />
      </BrowserRouter>
    );

    const linkElement = screen.getByText('Home');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/home');  ≈
  });

  it('applies the correct class when logOut is true', () => {
    render(
      <BrowserRouter>
        <CustomLink to="/logout" title="Logout" logOut={true} />
      </BrowserRouter>
    );

    // Check if the correct class for logOut is applied
    const linkElement = screen.getByText('Logout');
    expect(linkElement).toHaveClass('text-red-500');
    expect(linkElement).toHaveClass('hover:text-red-700');
  });

  it('applies the correct class when logOut is false', () => {
    render(
      <BrowserRouter>
        <CustomLink to="/home" title="Home" logOut={false} />
      </BrowserRouter>
    );

    // Check if the correct class for non-logOut link is applied
    const linkElement = screen.getByText('Home');
    expect(linkElement).toHaveClass('text-blue-500');
    expect(linkElement).toHaveClass('hover:text-blue-700');
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();

    render(
      <BrowserRouter>
        <CustomLink to="/home" title="Home" onClick={handleClick} />
      </BrowserRouter>
    );

    const linkElement = screen.getByText('Home');
    
    // Simulate a click event on the link
    fireEvent.click(linkElement);

    // Check if the onClick handler was called
    expect(handleClick).toHaveBeenCalledTimes(1);

    // Check if the link is rendered with the correct title
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/home');

  });

});
