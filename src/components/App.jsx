import React from 'react';
import  Home  from './home/Home';
import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { Movies } from './movies/Movies';

export const App = () => {

  return (
    <div className={css.container}>
      React homework template
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/movies" element={<Movies />}/>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
