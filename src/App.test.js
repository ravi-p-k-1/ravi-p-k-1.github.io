import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };

  window.matchMedia = window.matchMedia || function () {
    return {
      matches: false,
      addEventListener: () => {},
      removeEventListener: () => {}
    };
  };
});

test('renders the site with the primary nav sections', () => {
  render(<App />);
  expect(screen.getByText(/Ravi Kakadia/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Skills/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument();
});
