/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import store from '../redux/store';
import QuestionsCard from '../components/QuestionsCard';

const props = {
  title: 'Favourite programming language?',
  published_at: '2021-07-29T22:25:29.739Z',
  choices: 7,
  url: '/questions/34',
};

describe('QuestionsCard component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <Provider store={store}>
          <QuestionsCard {...props} />
        </Provider>
      </BrowserRouter>, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <QuestionsCard {...props} />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
