
import React from 'react';

import {render, waitFor} from '@testing-library/react';
import nock from "nock";

import App from './App';
import * as HomePage from "@/Pages/HomePage/HomePage";

test('should renders without crashing', () => {
  render(<App />);
});

test('should renders error if server responds 500', async () => {

  const url = new URL(process.env.REACT_APP_PHARMA_DATASET_URL)
  nock.disableNetConnect()
  nock(url.origin)
    .get(url.pathname)
    .reply(500)

  const {getByTestId} = render(<App />);
  await waitFor(async () => {
    expect(nock.isDone()).toBeTruthy()
  })
  expect(getByTestId('error-message')).toBeTruthy()
  nock.cleanAll()

});

test('should renders error crashes for any reason', async () => {
  const spy = jest.spyOn(HomePage, 'default')
  spy.mockImplementation(() => {throw new Error()})

  const url = new URL(process.env.REACT_APP_PHARMA_DATASET_URL)
  nock.disableNetConnect()
  nock(url.origin)
    .get(url.pathname)
    .reply(200)

  const {getByTestId} = render(<App />);
  await waitFor(async () => {
    expect(nock.isDone()).toBeTruthy()
  })

  expect(getByTestId('error-message')).toBeTruthy()
  nock.cleanAll()

})
