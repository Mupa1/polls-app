import {
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAILURE,
} from './actionTypes';

export const fetchQuestionsSuccess = (questions) => ({
  type: FETCH_QUESTIONS_SUCCESS,
  payload: questions,
});

export const fetchQuestionsFailure = (error) => ({
  type: FETCH_QUESTIONS_FAILURE,
  payload: error,
});

export const fetchQuestionSuccess = (question) => ({
  type: FETCH_QUESTION_SUCCESS,
  payload: question,
});

export const fetchQuestionFailure = (error) => ({
  type: FETCH_QUESTION_FAILURE,
  payload: error,
});
