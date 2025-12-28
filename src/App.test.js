import { render, screen } from '@testing-library/react';
import App from './App';

it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/goodby you all/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders learn react alink', () => {
  render(<App />);
  const linkElement = screen.getByText(/goodby you all/i);
  expect(linkElement).toBeInTheDocument();
});