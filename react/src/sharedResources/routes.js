import React from 'react';
import { Route } from 'react-router';

import Hello from './components/Hello';

let routes = (
  <Route path="/" component={Hello}>
  </Route>
);

export default routes;
