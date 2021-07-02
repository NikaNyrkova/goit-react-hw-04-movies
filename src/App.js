import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "./routes";

import AppBar from "./components/AppBar";
import Loader from "./components/Loader";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);

function App() {
  return (
    <div className="App">
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route
            path={routes.movieDetailsPage}
            render={(props) => <MovieDetailsPage {...props} />}
          />
          <Route path={routes.moviesPage} component={MoviesPage} />
          <Redirect path={routes.home} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
