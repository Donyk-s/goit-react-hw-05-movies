// import React, { useEffect, useState } from 'react';
// import { fetchSearchMovies } from '../servise/Api';
import { Searchbar } from '../search/Search';

export const Movies = () => {
  const handleSearchSubmit = (searchData) => {
    // Обробка результату пошуку фільмів
    console.log('Search result:', searchData);
    // Інші дії з результатом пошуку
  };

  return (
    <div>
      <h1>Welcome Home Honey</h1>
      <Searchbar onSubmit={handleSearchSubmit} />
  
    </div>
  );
};
