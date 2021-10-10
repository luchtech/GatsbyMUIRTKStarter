import React from 'react';
import { Router } from '@reach/router';
import PrivateRoute from '../components/PrivateRoute';
import Dashboard from '../components/private/Dashboard';

const App = () => (
  <>
    <Router>
      <PrivateRoute path="/app/dashboard" component={Dashboard} />
    </Router>
  </>
);

export default App;
