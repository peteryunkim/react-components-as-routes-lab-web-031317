import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Actors from './components/Actors';
import App from './components/App';
import Directors from './components/Directors';
import Home from './components/Home';
import Movies from './components/Movies';


export default (
  /* add routes here */
  <Route path="/" component={App} >
		<IndexRoute component={Home} />
    <Route exact path="/movies" component={Movies} />
    <Route path="/actors" component={Actors} />
    <Route path="/directors" component={Directors} />
  </Route>
);
