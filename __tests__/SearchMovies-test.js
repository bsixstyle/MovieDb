import React from 'react';

import renderer, { act } from 'react-test-renderer';

import SearchMovies from '../screen/SearchMovies';

jest.useFakeTimers();

it('renders correctly', () => {
  const tree = renderer.create(<SearchMovies />).toJSON();
  expect(tree).toMatchSnapshot();

  
});
