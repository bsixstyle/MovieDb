import React from 'react';

import renderer from 'react-test-renderer';

import Popular from '../screen/Popular';

jest.useFakeTimers();

it('renders correctly', () => {
  const tree = renderer.create(<Popular />).toJSON();
  expect(tree).toMatchSnapshot();
});
