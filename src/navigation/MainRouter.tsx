import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieListContainer from 'containers/MovieListContainer/MovieListContainer';
import CheckLoaderContainer from 'containers/CheckLoaderContainer/CheckLoaderContainer';

import { RouteKeys } from './routes';

const MainRouter = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route element={<CheckLoaderContainer />} path={RouteKeys.Index} />
        <Route element={<MovieListContainer />} path={RouteKeys.Movies} />
      </Routes>
    </div>
  );
};

export default MainRouter;
