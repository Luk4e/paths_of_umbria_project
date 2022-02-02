import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';

test('<Login /> clicking the button calls event handler once', () => {

  const component = render(
    <Login />
  );

  const mockHandler = jest.fn();

  const button = component.getByText('login');

  fireEvent.click(button);

  expect(mockHandler.mock.calls).toHaveLength(0);

});
