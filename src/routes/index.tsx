import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Heroes from '../pages/Heroes';
import Beers from '../pages/Beers';
import LikedBeers from '../pages/LikedBeers';
import LikedHeroes from '../pages/LikedHeroes';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/heroes" component={Heroes} />
    <Route path="/liked-heroes" component={LikedHeroes} />
    <Route path="/beers" component={Beers} />
    <Route path="/liked-beers" component={LikedBeers} />
  </Switch>
);

export default Routes;
