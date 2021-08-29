import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with size big', () => {
    renderTheme(<Heading size={'big'}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xlarge,
      'text-transform': 'none',
    });
  });

  it('should render with size medium', () => {
    renderTheme(<Heading size={'medium'}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.large,
      'text-transform': 'none',
    });
  });

  it('should render with size small', () => {
    renderTheme(<Heading size={'small'}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.medium,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(
      <Heading size={'big'} colorDark={false}>
        texto
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correctly when in mobile', () => {
    renderTheme(<Heading size={'huge'}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyleRule(
      'font-size',
      theme.font.sizes.xlarge,
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should render with uppercase letters', () => {
    renderTheme(
      <Heading size={'big'} uppercase>
        texto
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render with uppercase letters', () => {
    const { container } = renderTheme(
      <Heading size={'big'} uppercase>
        texto
      </Heading>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
