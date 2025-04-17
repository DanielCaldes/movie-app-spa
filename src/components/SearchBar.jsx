import React from 'react';

export default function SearchBar({ query, setQuery, onSearch }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSearch(); }} className="search-form">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter film title..."
        aria-label="Search films"
      />
      <button type="submit">Search</button>
    </form>
  );
}