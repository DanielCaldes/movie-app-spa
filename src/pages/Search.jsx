import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Search() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const queryFromUrl = searchParams.get('q') || '';
  const [query, setQuery] = useState(queryFromUrl);
  const [results, setResults] = useState([]);

  const fetchMovies = async (searchQuery) => {
    if (!searchQuery) return;
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${searchQuery}`
      );
      setResults(res.data.results);
      console.log('Resultados:', res.data.results);
    } catch (error) {
      console.error('Error al buscar películas:', error);
    }
  };

  useEffect(() => {
    setQuery(queryFromUrl);
    fetchMovies(queryFromUrl);
  }, [queryFromUrl]);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div>
      <Header/>
      <main>
        <h1>Search Films</h1>
        <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
        <MovieList movies={results} />
      </main>
      <Footer/>
    </div>
  );
}