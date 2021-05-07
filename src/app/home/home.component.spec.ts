import { render } from '@testing-library/angular';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  test('Should render children', async () => {
    const { getByText } = await render(HomeComponent);
    expect(getByText('Welcome to My Angular Examples.')).toBeInTheDocument();
    expect(getByText('Pick a project you want to discover.')).toBeInTheDocument();
    expect(getByText('Go to TODO App')).toBeInTheDocument();
  });
});
