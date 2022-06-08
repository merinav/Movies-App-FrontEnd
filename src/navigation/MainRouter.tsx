import { Route, Routes } from 'react-router-dom';
import MovieListContainer from 'containers/MovieListContainer/MovieListContainer';
import MovieInfoContainer from 'containers/MovieInfoContainer/MovieInfoContainer';

import { RouteKeys } from './routes';

const MainRouter = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route element={<MovieInfoContainer />} path={RouteKeys.Movie} />
        <Route element={<MovieListContainer />} path={RouteKeys.Index} />
        <Route element={<MovieListContainer />} path={RouteKeys.Movies} />
      </Routes>
    </div>
  );
};

export default MainRouter;
