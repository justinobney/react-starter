import React from 'react';
import { Route, IndexRoute } from 'react-router'
import {requireAuthentication} from 'components/util/RequireAuthentication';

import Wrapper from 'components/util/Wrapper'

import App from './screens/App/';
import Home from './screens/Home/';
import Login from './screens/Login/';

let routes = (
  <Route path="/" component={App}>
    <Route component={requireAuthentication(Wrapper)}>
      <IndexRoute component={Home}/>
    </Route>
    <Route path="login" component={Login} />
  </Route>
);

export default routes
