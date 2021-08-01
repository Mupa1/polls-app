/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const QuestionsCard = ({
  title, published_at, choices, url,
}) => (
  <Link to={`${url}`}>
    <article>
      <h2>{title}</h2>
      <p>
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
