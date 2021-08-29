import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { renderTheme } from '../../styles/render-theme';
import { GoTop } from '.';

describe('<GoTop />', () => {
  it('should render a Go to Top button', () => {
    const { container } = renderTheme(<GoTop>Children</GoTop>);
    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
