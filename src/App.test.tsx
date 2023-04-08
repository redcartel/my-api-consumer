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

describe('get route', () => {
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
})
