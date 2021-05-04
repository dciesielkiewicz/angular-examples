import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './shared/background/background.component';
import { HeaderComponent } from './shared/header/header.component';
import { LayoutComponent } from './shared/layout/layout.component';

describe('AppComponent', () => {
  it('should render Todo list header', async () => {
    const { getByText } = await render(AppComponent, {
      declarations: [BackgroundComponent, HeaderComponent, LayoutComponent],
    });
    expect(getByText('Todo List')).toBeTruthy();
  });
});
