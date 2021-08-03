import { combineReducers } from 'redux';

import questionsReducer from './questionsReducer';
import questionReducer from './questionReducer';

const rootReducer = combineReducers({
  questions: questionsReducer,
  question: questionReducer,
});

export default rootReducer;
