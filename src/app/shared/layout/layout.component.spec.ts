import { render } from '@testing-library/angular';
import { LayoutComponent } from './layout.component';
import { BackgroundComponent } from '../background/background.component';
import { HeaderComponent } from '../header/header.component';

const children = 'children';

describe('Layout', () => {
  test('Should render children', async () => {
    const { getByText } = await render(`<app-layout>${children}</app-layout>`, {
      declarations: [BackgroundComponent, HeaderComponent, LayoutComponent]
    });
    expect(getByText(children)).toBeInTheDocument();
  });
});
