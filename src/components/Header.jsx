import React from 'react';
import { Link } from 'react-router-dom';
import fallbackImage from '../assets/logo.png';

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link to="/" style={styles.navLink}>
            <img src={fallbackImage} alt="Logo" style={{ height: '100px' }} />
        </Link>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
          <Link to="/search" style={styles.navLink}>
            Search
          </Link>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#100F0D',
    color: '#fff',
    padding: '10px 0',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  nav: {
    display: 'flex',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '20px',
    fontSize: '1rem',
  },
};