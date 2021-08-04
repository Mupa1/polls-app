import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ProgressBar from '@ramonak/react-progress-bar';

import { getQuestionDetails, voteOnAChoice } from '../api';

const QuestionDetails = ({ match, history }) => {
  const dispatch = useDispatch();
  const selectedQuestion = useSelector((state) => state.question.question);
  const { question, choices } = selectedQuestion;

  const initialState = {
    choice: '',
    votes: '',
    url: '',
  };
  const [values, setValues] = useState(initialState);

  useEffect(() => {
    const { questionId } = match.params;

    dispatch(getQuestionDetails(questionId));
  }, []);

  const getVotesSum = (choices) => {
    const initialValue = 0;
    const sum = choices.reduce(
      (accumulator, currentValue) => accumulator + currentValue.votes,
      initialValue,
    );
    return sum;
  };

  const handleVotesPercentage = (choices, votes) => {
    let percentage = 0;
    if (votes > 0) {
      percentage = ((votes / getVotesSum(choices)) * 100).toFixed(2);
    } else {
      percentage = (0).toFixed(2);
    }
    return percentage;
  };

  const handleChoiceClick = (choices) => {
    setValues({
      choice: choices.choice,
      votes: choices.votes + 1,
      url: choices.url,
    });
  };

  const handleBack = () => (
    history.push('/')
  );

  const handleSaveVote = (e) => {
    e.preventDefault();

    dispatch(voteOnAChoice(values));
    handleBack();
  };

  return (
    <section className="details">
      {selectedQuestion && (
        <>
          <h2>
            Question:
            {' '}
            {question}
          </h2>

          {choices.map((choice) => (
            <div
              key={choice.url}
              role="button"
              tabIndex={0}
              className="details-choice-card"
              onClick={() => handleChoiceClick(choice)}
              onKeyDown={() => handleChoiceClick(choice)}
            >
              <h3 className="details-info detail-choice">{choice.choice}</h3>
              <div className="details-info">
                Votes:
                {' '}
                {choice.votes}
              </div>
              <div className="details-info">
                {handleVotesPercentage(choices, choice.votes)}
                {' '}
                %
              </div>
              <div className="details-info">
                <ProgressBar
                  completed={handleVotesPercentage(choices, choice.votes)}
                  isLabelVisible={false}
                />
              </div>
            </div>
          ))}
          <div>
            <button type="button" className="details-buttons" onClick={handleBack}>Back</button>
            <button type="submit" className="details-buttons details-save-vote" onClick={handleSaveVote}>Save vote</button>
          </div>
        </>
      )}
    </section>
  );
};

QuestionDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      questionId: PropTypes.string,
      choiceId: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default QuestionDetails;
