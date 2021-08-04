import {
  VOTE_SUCCESS,
  VOTE_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  vote: null,
  error: '',
};

const voteReducer = (state = initialState, action) => {
  switch (action.type) {
    case VOTE_SUCCESS:
      return {
        ...state,
        vote: action.payload,
      };
    case VOTE_FAILURE:
      return {
        ...state,
        error: action.payload,
        vote: '',
      };
    default:
      return state;
  }
};

export default voteReducer;
