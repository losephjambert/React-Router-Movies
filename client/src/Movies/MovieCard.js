import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, detail }) => {
  const { title, director, metascore, stars } = movie;
  return (
    <div className='save-wrapper'>
      <div className='movie-card'>
        <h2>{title}</h2>
        <div className='movie-director'>
          Director: <em>{director}</em>
        </div>
        <div className='movie-metascore'>
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars &&
          stars.map(star => (
            <div key={star} className='movie-star'>
              {star}
            </div>
          ))}
      </div>
      {detail ? (
        <div className='save-button'>Save</div>
      ) : (
        <Link className='save-button' to={`/movies/${movie.id}`}>
          Details
        </Link>
      )}
    </div>
  );
};

export default MovieCard;
