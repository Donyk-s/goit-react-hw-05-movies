import React, { lazy } from 'react';
import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Cast from './page/cast/Cast'
import { SharedLayout } from './sharedLayout/SharedLayout';


const Home = lazy(() => import('./home/Home'))
const Movies = lazy(()=> import('./movies/Movies'))
const MovieDetails = lazy(()=> import('./page/movieDetails/MovieDetails'));
const Reviews = lazy(()=> import('./page/reviews/Reviews'))
const NotFound = lazy(()=> import('./page/notFound/NotFound'))


export const App = () => {

  return (
    <div className={css.container}>
    
      <Routes>
  <Route path="/" element={<SharedLayout />}>
    <Route index element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/movies/:id" element={<MovieDetails />}>
      <Route path="cast" element={<Cast />} />
      <Route path="reviews" element={<Reviews />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>

    </div>
  );
};

