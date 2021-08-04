import {
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  question: '',
  error: '',
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTION_SUCCESS:
      return {
        ...state,
        question: action.payload,
      };
    case FETCH_QUESTION_FAILURE:
      return {
        ...state,
        error: action.payload,
        question: '',
      };
    default:
      return state;
  }
};

export default questionReducer;
