import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { fetchHotels } from './App';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from './components/Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should render Header component correctly', () => {
   const renderer = new ReactShallowRenderer();
   renderer.render(<Header />);
   expect(renderer.getRenderOutput()).toMatchSnapshot();
});

// test('should fetch all hotels', () => {
//    const result = fetchHotels()
//    expect(this.state.hotels.length).toBe(10);
// });
