import fallbackImage from '../assets/no-image.jpg';

export default function MovieCard({ movie }) {
    return (
      <div className="movie-card">
        <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        onError={(e) => e.target.src = fallbackImage}
      />
        <h3>{movie.title}</h3>
      </div>
    )
  }