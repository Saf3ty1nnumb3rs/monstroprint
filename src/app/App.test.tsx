import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page and does not crash', async () => {
  render(<App />);
  const container = await screen.findByTestId('App');
  expect(container).toBeInTheDocument();
});
