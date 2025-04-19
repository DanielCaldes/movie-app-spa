import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
    test('muestra el texto de derechos de autor con el año actual', () => {
        render(<Footer />);
        const year = new Date().getFullYear();
        expect(
        screen.getByText(new RegExp(`© ${year} Film Catering`, 'i'))
        ).toBeInTheDocument();
    });

    test('tiene un enlace a Facebook', () => {
        render(<Footer />);
        const facebookLink = screen.getByRole('link', { name: /facebook/i });
        expect(facebookLink).toBeInTheDocument();
        expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');
        expect(facebookLink).toHaveAttribute('target', '_blank');
    });

    test('tiene un enlace a Twitter', () => {
        render(<Footer />);
        const twitterLink = screen.getByRole('link', { name: /twitter/i });
        expect(twitterLink).toBeInTheDocument();
        expect(twitterLink).toHaveAttribute('href', 'https://twitter.com');
        expect(twitterLink).toHaveAttribute('target', '_blank');
    });
});
