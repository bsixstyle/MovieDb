import React from 'react';

import renderer from 'react-test-renderer';

import NowPlaying from '../screen/NowPlaying';

jest.useFakeTimers();

it('renders correctly', () => {
  const tree = renderer.create(<NowPlaying />).toJSON();
  expect(tree).toMatchSnapshot();
});
