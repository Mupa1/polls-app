/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const QuestionsCard = ({
  title, published_at, choices, url,
}) => (
  <Link to={`${url}`}>
    <article className="question-card">
      <h2 className="title">{title}</h2>
      <p className="published-on">
        Published on:
        {' '}
        {new Date(published_at).toDateString()}
      </p>
      <p>
        {choices}
        {' '}
        Choices
      </p>
    </article>
  </Link>
);

QuestionsCard.propTypes = {
  published_at: PropTypes.string.isRequired,
  choices: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default QuestionsCard;
