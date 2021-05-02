import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should render Todo list header', async () => {
    const { getByText } = await render(AppComponent);
    expect(getByText('Todo List')).toBeTruthy();
  });
});
