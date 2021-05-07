import { fireEvent, render, waitFor } from '@testing-library/angular';
import { HeaderComponent } from './header.component';

const children = 'children';

describe('HeaderComponent', () => {
  test('Should render children', async () => {
    const { getByText } = await render(`<app-header>${children}</app-header>`, {
      declarations: [HeaderComponent]
    });
    expect(getByText(children)).toBeInTheDocument();
  });

  test('Should render toggle menu button', async () => {
    const { getByLabelText } = await render(`<app-header>${children}</app-header>`, {
      declarations: [HeaderComponent]
    });
    expect(getByLabelText('Toggle menu')).toBeInTheDocument();
  });

  test('Should properly open and close navigation', async () => {
    const {
      getByLabelText,
      getByText,
      queryByLabelText,
    } = await render<HeaderComponent>(`<app-header>${children}</app-header>`, {
      declarations: [HeaderComponent],
    });
    expect(queryByLabelText('Sidenav')).not.toBeVisible();

    fireEvent.click(getByLabelText('Toggle menu'));
    await waitFor(() => expect(getByLabelText('Sidenav')).toBeVisible());

    fireEvent.click(getByText('Home'));
    await waitFor(() => expect(queryByLabelText('Sidenav')).not.toBeVisible());
  });
});
