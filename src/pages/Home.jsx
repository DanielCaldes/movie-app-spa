import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
      .then(res => setMovies(res.data.results))
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="movie-cards-container">
      <Header />
      <main>
        <h1>Popular Films</h1>
        <SearchBar query={searchQuery} setQuery={setSearchQuery} onSearch={handleSearch} />
        <MovieList movies={movies} />
      </main>
      <Footer />
    </div>
  );
}