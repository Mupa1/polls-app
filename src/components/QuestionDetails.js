import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ProgressBar from '@ramonak/react-progress-bar';

import { getQuestionDetails } from '../api';

const QuestionDetails = (props) => {
  const dispatch = useDispatch();
  const selectedQuestion = useSelector((state) => state.question.question);
  const { question, choices } = selectedQuestion;

  useEffect(() => {
    const { questionId } = props.match.params;

    dispatch(getQuestionDetails(questionId));
  }, []);

  const handleVotesPercentage = (choices, votes) => {
    const initialValue = 0;
    const sum = choices.reduce(
      (accumulator, currentValue) => accumulator + currentValue.votes,
      initialValue,
    );

    const percentage = ((votes / sum) * 100).toFixed(2);
    return percentage;
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
            <div key={choice.url} className="details-choice-card">
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
        </>
      )}
    </section>
  );
};

QuestionDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      questionId: PropTypes.string,
    }),
  }).isRequired,
};

export default QuestionDetails;
