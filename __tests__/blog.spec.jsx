import React from 'react';
import { render, screen } from '@testing-library/react';
import Blog from '../src/pages/blog';

describe('Blog', () => {
  it('should render blog page with post component', () => {
    render(<Blog />);

    expect(screen.getByText(/Some component/)).toBeInTheDocument();
  });
});
