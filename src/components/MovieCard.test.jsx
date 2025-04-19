import { render, screen, fireEvent  } from '@testing-library/react';
import MovieCard from './MovieCard';
import fallbackImage from '../assets/no-image.jpg';

const mockMovie = {
  title: 'The Matrix',
  poster_path: '/matrix.jpg',
};

const mockMovieWithoutPoster = {
    title: 'Sin Póster',
    poster_path: null,
  };

describe('MovieCard component', () => {
    test('muestra el título de la película', () => {
        render(<MovieCard movie={mockMovie} />);
        expect(screen.getByText('The Matrix')).toBeInTheDocument();
    });

    test('muestra la imagen correcta con alt', () => {
        render(<MovieCard movie={mockMovie} />);
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', 'https://image.tmdb.org/t/p/w200/matrix.jpg');
        expect(img).toHaveAttribute('alt', 'The Matrix');
    });

    test('carga imagen alternativa si falla la principal', () => {
        render(<MovieCard movie={mockMovie} />);

        const image = screen.getByRole('img');

        fireEvent.error(image);

        expect(image.src).toContain(fallbackImage);
    });
    
    test('muestra fallbackImage directamente si poster_path es null', () => {
        render(<MovieCard movie={mockMovieWithoutPoster} />);
        
        const image = screen.getByRole('img');

        expect(image.src).toMatch(/no-image\.jpg$/);
    });
});