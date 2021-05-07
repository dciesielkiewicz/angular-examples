import { render } from '@testing-library/angular';
import { HeaderComponent } from './header.component';

const children = 'children';

describe('HeaderComponent', () => {
  test('Should render children', async () => {
    const { getByLabelText } = await render(`<app-header>${children}</app-header>`, {
      declarations: [HeaderComponent]
    });
    expect(getByLabelText('Toggle menu')).toBeInTheDocument();
  });
});
