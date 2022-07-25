import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoot, AuthorizationStatus } from '../../const';
import Error from '../error/error';
import PrivateRoute from '../../components/private-route/private-route';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import Main from '../../pages/main/main';
import {City, offerType, Points} from '../../types/types';

type AppProps = {
  rentalOffers: number;
  offers: offerType[];
  points: Points;
  city: City;
}

function App({rentalOffers, offers, points, city}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoot.Main}
          element={
            <Main
              rentalOffers={rentalOffers}
              offers={offers}
              points={points}
              city={city}
            />
          }
        />
        <Route
          path={AppRoot.Login}
          element={<Login />}
        />
        <Route
          path={AppRoot.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites
                offers={offers}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoot.Room}
          element={
            <Room
              offers={offers}
            />
          }
        />
        <Route
          path='*'
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
