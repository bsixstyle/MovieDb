import React from 'react';

import renderer from 'react-test-renderer';

import { render, act, fireEvent } from 'react-native-testing-library'

import SearchMovies from '../screen/SearchMovies';

jest.useFakeTimers();

it('renders correctly', () => {
  const tree = renderer.create(<SearchMovies />).toJSON();
  expect(tree).toMatchSnapshot();  
});

// update to test text and search button function