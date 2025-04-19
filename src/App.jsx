import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import Search from './pages/Search'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
