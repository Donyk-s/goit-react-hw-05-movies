import React from 'react';
import  Home  from './home/Home';
import css from './App.module.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import  Movies from './movies/Movies';
import MovieDetails from './page/MovieDetails';
import Cast from './page/cast/Cast'

export const App = () => {

  return (
    <div className={css.container}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
          <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
   
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/movies" element={<Movies />}/>
        <Route path="/movies/:id" element={<MovieDetails />} />
         <Route path="/movies/:id/cast" element={<Cast/>} />
         {/* <Route path="/reviews" element={<Reviews/>} /> */}
      
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
export default App;
