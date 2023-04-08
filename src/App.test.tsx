import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import OuterApp from './OuterApp';
import MockAdapter from 'axios-mock-adapter';
import axios, { AxiosAdapter } from 'axios';
import { wait } from '@testing-library/user-event/dist/utils';

describe('renders page', () => {
  it('renders the home route title', () => {
    render(<OuterApp />);
    const homeRouteTitle = screen.getByText(/HomeRoute/i);
    expect(homeRouteTitle).toBeInTheDocument();
  });
});

describe('api routes', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  })

  it('gets data from get route', async () => {
    let responseObject = { "name": "N", "description": "TEST VAL", "version": "0.0" }
    mock.onGet().reply(200, { data: responseObject })
    render(<OuterApp />);
    fireEvent.click(screen.getByText(/GetRoute/i));
    const responseText = await screen.findByText(/TEST VAL/);
    expect(responseText).toBeInTheDocument();
  })

  it('posts data to the route', async () => {
    let responseObject = { "field": "test data" }
    mock.onPost().reply(200, { data: responseObject })
    // don't totally know why this is needed:
    mock.onGet().reply(200, { data: '' })

    render(<OuterApp />);

    fireEvent.click(screen.getByText(/PostRoute/i));
    const input = screen.getByPlaceholderText('echo value');
    fireEvent.change(input, { target: { value: 'ok' } })
    const submit = await screen.findByText('submit')
    fireEvent.click(submit);

    const responseText = await screen.findByText(/test data/);
    expect(responseText).toBeInTheDocument();
  })
})

describe('context login', () => {

  it('updates context', async () => {
    render(<OuterApp />);
    fireEvent.click(screen.getByText(/Login/i));
    const input = screen.getByPlaceholderText('username');
    fireEvent.change(input, { target: { value: 'mr.user' } })
    const submit = await screen.findByText('submit')
    fireEvent.click(submit);

    const responseText = await screen.findByText(/Logged in as mr.user/i);
    expect(responseText).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Home/i));
    const responseText2 = await screen.findByText(/mr.user/i);
    expect(responseText2).toBeInTheDocument();
  })
})
