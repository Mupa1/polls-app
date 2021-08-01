import {
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  questions: [],
  error: '',
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
      };
    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        error: action.payload,
        questions: '',
      };
    default:
      return state;
  }
};

export default questionsReducer;
