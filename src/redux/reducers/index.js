import { combineReducers } from 'redux';

import questionsReducer from './questionsReducer';
import questionReducer from './questionReducer';
import voteReducer from './voteReducer';

const rootReducer = combineReducers({
  questions: questionsReducer,
  question: questionReducer,
  vote: voteReducer,
});

export default rootReducer;
