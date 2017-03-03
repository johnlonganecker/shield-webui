import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, IndexRoute, Route, Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'fixed-data-table/dist/fixed-data-table.css';
import './index.css';

import App from './modules/App';
import Dashboard from './modules/Dashboard';
import Backups from './modules/Backups';
import Jobs from './modules/Jobs';
import NewJob from './modules/NewJob';
import NewStore from './modules/NewStore';
import NewTarget from './modules/NewTarget';
import Policies from './modules/Policies';
import Schedules from './modules/Schedules';
import Stores from './modules/Stores';
import Targets from './modules/Targets';

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      
      <IndexRoute component={Dashboard} />
      <Route path="backups" component={Backups} />
      <Route path="jobs">
        <IndexRoute component={Jobs} />
        <Route path="new" component={NewJob} />
      </Route>
      <Route path="stores">
        <IndexRoute component={Stores} />
        <Route path="new" component={NewStore} />
      </Route>
      <Route path="targets">
        <IndexRoute component={Targets} />
        <Route path="new" component={NewTarget} />
      </Route>
      <Route path="policies" component={Policies} />
      <Route path="schedules" component={Schedules} />
    </Route>
  </Router>
  ), document.getElementById('root')
);
