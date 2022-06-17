import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const response = { speaker: 'Speaker', quote: 'test quote' };

const server = setupServer(
  rest.get('http://127.0.0.1:3000/', (req, res, ctx) => {
    return res(ctx.json(response));
  })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the app with a button, a quote and a button', () => {
  render(<App />);
  const buttonEl = screen.getByRole('button');
  const imageEl = screen.getByRole('img');
  const textEl = screen.getByText(/loading quote/);

  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
});

test('calls api on button click and updte its', async () => {
  render(<App />);
  const buttonEl = screen.getByRole('button');
  fireEvent.click(buttonEl);

  const quoteEl = await screen.findByText(response.quote);
  expect(quoteEl).toBeInDocument();
})

test('calls api on startup', async () => {
  render(<App />);
  const quoteEl = await screen.findByText(response.quote);

  expect(quoteEl).toBeInDocument();
})
