import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          &copy; {new Date().getFullYear()} Film Catering. Fictional page created for educational purposes.
        </p>
        <div style={styles.socialLinks}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            <FaFacebook style={styles.icon} />
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            <FaTwitter style={styles.icon} />
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#100F0D',
    color: '#fff',
    padding: '20px 0',
    marginTop: '20px',
    maxWidth: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  text: {
    margin: 0,
  },
  socialLinks: {
    display: 'flex',
  },
  socialLink: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '15px',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '8px', // Espacio entre el icono y el texto
    fontSize: '1.5rem', // Tamaño del icono
  },
};