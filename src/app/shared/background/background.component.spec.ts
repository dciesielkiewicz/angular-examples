import { render } from '@testing-library/angular';
import { BackgroundComponent } from './background.component';

const children = 'children';

describe('Background', () => {
  test('Should render children', async () => {
    const { getByTestId, getByText } = await render(`<app-background>${children}</app-background>`, {
      declarations: [BackgroundComponent]
    });
    expect(getByTestId('background')).toHaveClass('background');
    expect(getByText(children)).toBeInTheDocument();
  });
});
