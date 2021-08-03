import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ProgressBar from '@ramonak/react-progress-bar';

const QuestionDetails = (props) => {
  const questions = useSelector((state) => state.questions.questions);

  const [selectedQuestion, setSelectedQuestion] = useState('');
  const { choices, question } = selectedQuestion;

  const getQuestionDetails = (id) => (
    questions.find((question) => question.url === `/questions/${id}`)
  );

  useEffect(() => {
    const { questionId } = props.match.params;

    setSelectedQuestion(getQuestionDetails(questionId));
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

  console.log(selectedQuestion);
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
            <div key={choice.url}>
              <div>{choice.choice}</div>
              <div>
                Votes:
                {' '}
                {choice.votes}
              </div>
              <div>
                {handleVotesPercentage(choices, choice.votes)}
                {' '}
                %
              </div>
              <div>
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
