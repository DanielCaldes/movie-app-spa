import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MovieList from './MovieList';

const mockMovies = [
  { id: 1, title: 'Interstellar', poster_path: '/interstellar.jpg' },
  { id: 2, title: 'Inception', poster_path: '/inception.jpg' },
];

describe('MovieList component', () => {
    test('muestra mensaje si no hay películas', () => {
        render(<MovieList movies={[]} />);
        expect(screen.getByText(/No results found/i)).toBeInTheDocument();
    });

    test('cada enlace tiene el href correcto', () => {
        render(
        <MemoryRouter>
            <MovieList movies={mockMovies} />
        </MemoryRouter>
        );

        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(2);
        expect(links[0]).toHaveAttribute('href', '/movie/1');
        expect(links[1]).toHaveAttribute('href', '/movie/2');
    });
});