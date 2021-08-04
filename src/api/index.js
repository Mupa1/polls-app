import axios from 'axios';

import * as action from '../redux/actions';

const baseUrl = 'https://polls.apiblueprint.org';

export const getQuestions = () => async (dispatch) => {
  try {
    const results = await axios.get(`${baseUrl}/questions`);
    dispatch(action.fetchQuestionsSuccess(results.data));
  } catch (error) {
    dispatch(action.fetchQuestionsFailure(error));
  }
};

export const getQuestionDetails = (id) => async (dispatch) => {
  try {
    const results = await axios.get(`${baseUrl}/questions/${id}`);
    dispatch(action.fetchQuestionSuccess(results.data));
  } catch (error) {
    dispatch(action.fetchQuestionFailure(error));
  }
};

export const voteOnAChoice = (choice) => async (dispatch) => {
  try {
    const data = await axios.post(`${baseUrl}${choice.url}`,
      {
        vote: {
          choice: choice.choice,
          votes: choice.votes,
          url: choice.url,
        },
      });
    dispatch(action.voteSuccess(data.vote));
  } catch (error) {
    dispatch(action.voteFailure(error));
  }
};
