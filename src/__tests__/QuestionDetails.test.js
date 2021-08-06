/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import store from '../redux/store';
import QuestionDetails from '../components/QuestionDetails';

const props = {
  match: {
    params: {
      questionId: '34',
    },
  },
  history: {
    push: () => '/',
  },
};

describe('QuestionDetails component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Provider store={store}>
        <QuestionDetails {...props} />
      </Provider>, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <QuestionDetails {...props} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
