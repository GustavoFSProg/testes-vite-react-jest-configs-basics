// Button.spec.tsx
import React from 'react';
import { render, screen  } from '@testing-library/react';
import Button from '../button';

describe('Button component tests', () => {
  test('renders without crashing', () => {

  const {getByText} =  render(<Button />);


    expect(getByText('botao')).toBeInTheDocument()

    // const button = screen.getAllByRole('pure_button')

  });
});