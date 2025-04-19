import fallbackImage from '../assets/no-image.jpg';

export default function MovieCard({ movie }) {
    return (
      <div className="movie-card">
        <img
          src={movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : fallbackImage}
          alt={movie.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
        />
        <h3>{movie.title}</h3>
      </div>
    )
  }