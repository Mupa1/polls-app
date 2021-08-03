import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import QuestionDetails from './components/QuestionDetails';
import QuestionsList from './containers/QuestionsList';

const App = () => (
  <BrowserRouter>
    <>
      <Route exact path="/" render={() => <Redirect to="/questions" />} />
      <Switch>
        <Route exact path="/questions" component={QuestionsList} />
        <Route path="/questions/:questionId" component={QuestionDetails} />
      </Switch>
    </>
  </BrowserRouter>
);

export default App;
