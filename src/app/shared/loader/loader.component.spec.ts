import { render } from '@testing-library/angular';
import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  test('Should render children', async () => {
    const { getByTestId } = await render(LoaderComponent);
    expect(getByTestId('loading-icon')).toBeInTheDocument();
  });
});
