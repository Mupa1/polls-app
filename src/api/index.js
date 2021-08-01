import axios from 'axios';

import * as action from '../redux/actions';

const baseUrl = 'https://polls.apiblueprint.org';

const getQuestions = () => async (dispatch) => {
  try {
    const results = await axios.get(`${baseUrl}/questions`);
    dispatch(action.fetchQuestionsSuccess(results.data));
  } catch (error) {
    dispatch(action.fetchQuestionsFailure(error));
  }
};

export default getQuestions;
