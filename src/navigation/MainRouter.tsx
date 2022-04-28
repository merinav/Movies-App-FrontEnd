import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from 'components/MovieListContainer/MovieListContainer';
import SampleList from 'components/MovieListContainer/SampleListContainer';

import { RouteKeys } from './routes';

const MainRouter = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route element={<SampleList />} path={RouteKeys.Index} />
        <Route element={<MovieList />} path={RouteKeys.Movies} />
      </Routes>
    </div>
  );
};

export default MainRouter;
