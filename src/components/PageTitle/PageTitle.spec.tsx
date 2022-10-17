import { render, screen } from '@testing-library/react';
import { PageTitle } from './index';

describe('Page title', () => {
  it('renders correctly', () => {
    render(<PageTitle mainTitle='Sobre mim' subTitle='Um pouco' />)
    expect (screen.getByText('Sobre mim')).toBeInTheDocument();
    expect (screen.getByText('Um pouco')).toBeInTheDocument();
  })
})