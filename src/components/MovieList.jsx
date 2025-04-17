import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
    if (!movies || movies.length === 0) {
      return <p style={{ marginTop: '1rem', textAlign: 'center' }}>No results found.</p>;
    }
  
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    );
  }