import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getQuestions from '../api';

import QuestionsCard from '../components/QuestionsCard';

const QuestionsList = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  return (
    <section>
      {questions.length ? (
        <>
          <h1>Questions</h1>
          <div>
            {questions.map((question, index) => (
              <div key={question.url}>
                <QuestionsCard
                  title={question.question}
                  published_at={question.published_at}
                  choices={questions[index].choices.length}
                  url={question.url}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>Loading questions ...</div>
      )}
    </section>
  );
};

export default QuestionsList;
