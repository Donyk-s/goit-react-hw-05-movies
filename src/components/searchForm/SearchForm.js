import React, { useState } from "react";
import PropTypes from 'prop-types';
const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSubmit(query);
  };

  return (
    <div>
      <input type="text" name="query" value={query} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

SearchForm.propTypes ={
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
