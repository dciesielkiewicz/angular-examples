import { render } from '@testing-library/angular';
import { LoaderComponent } from './loader.component';

const children = 'children';

describe('Layout', () => {
  test('Should render children', async () => {
    const { getByTestId } = await render(LoaderComponent);
    expect(getByTestId('loading-icon')).toBeInTheDocument();
  });
});
