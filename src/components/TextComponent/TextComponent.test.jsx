import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should render with default values', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should render with default values', () => {
    const { Container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(Container).toMatchSnapshot();
  });
});
