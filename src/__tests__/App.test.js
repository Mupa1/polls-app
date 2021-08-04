import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from '../App';
import store from '../redux/store';
import QuestionsList from '../containers/QuestionsList';
import QuestionDetails from '../components/QuestionDetails';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('default path should redirect to QuestionsList component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper.find(QuestionsList)).toHaveLength(1);
  });

  it('/questions path should open QuestionsList component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/questions']} initialIndex={0}>
        <Provider store={store}>
          <Route
            path="/questions"
            component={QuestionsList}
          />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper.find(QuestionsList)).toHaveLength(1);
  });

  it('/questions/:questionId path should open QuestionDetails component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/questions/:questionId']} initialIndex={0}>
        <Provider store={store}>
          <Route
            path="/questions/:questionId"
            component={QuestionDetails}
          />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper.find(QuestionDetails)).toHaveLength(1);
  });
});
