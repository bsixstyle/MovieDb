import React from 'react';

import renderer from 'react-test-renderer';

import TopRated from '../screen/TopRated';

jest.useFakeTimers();

it('renders correctly', () => {
  const tree = renderer.create(<TopRated />).toJSON();
  expect(tree).toMatchSnapshot();
});
