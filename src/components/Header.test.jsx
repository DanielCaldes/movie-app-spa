import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import logoURL from '../assets/logo.png'; 

describe('Header component', () => {
    test('debe renderizar el logo', () => {
        render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
        );

        const logoIMG = screen.getByAltText('Logo');
        expect(logoIMG).toBeInTheDocument();
        expect(logoIMG).toHaveAttribute('src', logoURL);
    });

    test('debe contener los enlaces de navegación', () => {
        render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
        );

        const homeLink = screen.getByRole('link', { name: /home/i });
        const searchLink = screen.getByRole('link', { name: /search/i });

        expect(homeLink).toHaveAttribute('href', '/');
        expect(searchLink).toHaveAttribute('href', '/search');
    });
});