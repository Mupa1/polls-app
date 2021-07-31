import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import QuestionsList from './containers/QuestionsList';

const App = () => (
  <BrowserRouter>
    <>
      <Route path="/" render={() => <Redirect to="/questions" />} />
      <Switch>
        <Route path="/questions" component={QuestionsList} />
      </Switch>
    </>
  </BrowserRouter>
);

export default App;
