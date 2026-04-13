import React from 'react';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => {
        return (
          <div key={index}>
            <h2>{movie.name}</h2>
            <p>Date: {movie.date}</p>
            <p>Genre: {movie.genre}</p>
            <p>Plot: {movie.plot}</p>
            <p>
              IMDb Link:{' '}
              <a href={movie.imdbLink} target="_blank" rel="noreferrer">
                Open IMDb
              </a>
            </p>
            <img src={movie.imgUrl} alt={movie.name} width="200" />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      plot: PropTypes.string.isRequired,
      imdbLink: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired
    })
  ).isRequired
};