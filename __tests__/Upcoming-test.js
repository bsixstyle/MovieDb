import React from 'react';

import renderer from 'react-test-renderer';

import Upcoming from '../screen/Upcoming';

jest.useFakeTimers();

it('renders correctly', () => {
  const tree = renderer.create(<Upcoming />).toJSON();
  expect(tree).toMatchSnapshot();
});
