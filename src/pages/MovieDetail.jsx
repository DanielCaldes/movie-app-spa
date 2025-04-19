import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function MovieDetail() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [backgroundLoaded, setBackgroundLoaded] = useState(false)


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
      .then(res => setMovie(res.data))
  }, [id])

  useEffect(() => {
    if (movie?.backdrop_path) {
      const img = new Image();
      img.src = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  
      const handleLoad = () => {
        setTimeout(() => {
          setBackgroundLoaded(true);
        }, 50);
      };
  
      if (img.complete) {
        handleLoad();
      } else {
        img.onload = handleLoad;
      }
    }
  }, [movie])

  if (!movie) return <p className="loading">Cargando...</p>

  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`

  return (
    <div>
      <main>
      <div className="movie-detail-container">
        {movie.backdrop_path && (
          <div
            className={`background-layer ${backgroundLoaded ? 'loaded' : ''}`}
            style={{
              backgroundImage: `url(${backdropUrl})`
            }}
          />
        )}
        <div className="movie-detail">
          <div className="overlay" />
            {movie.poster_path && (
              <div className="movie-image">
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
              </div>
            )}
          <div className="movie-info">
            <h1>{movie.title}</h1>
            <p className="release-date">Estreno: {movie.release_date}</p>
            <p className="overview">{movie.overview}</p>
            <div className="rating">
              <span className="rating-label">Calificación: </span>
              <span className="rating-value">{movie.vote_average}</span>
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  )
}