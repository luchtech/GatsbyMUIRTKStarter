import React from 'react';
import { Router } from '@reach/router';
import PrivateRoute from '../components/PrivateRoute';
import Dashboard from '../components/private/Dashboard';
import Markdown from '../components/private/Markdown.mdx';

const App = () => (
  <>
    <Router>
      <PrivateRoute path="/app/dashboard" component={Dashboard} />
      <PrivateRoute path="/app/markdown" component={Markdown} />
    </Router>
  </>
);

export default App;
