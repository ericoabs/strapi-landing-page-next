import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumns } from '.';

import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('should render two columns grid without background', () => {
    const { container } = renderTheme(
      <GridTwoColumns {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
  it('should render two columns grid with background', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
