import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import DashboardPage from '../pages/dashboard';
import AccountPage from '../pages/account';
import withLayout from '../../hoc/withLayout';
import LoginPage from '../pages/login';
import withAuth from '../../hoc/withAuth';

const DashboardPageWithLayout = withLayout(DashboardPage);
const AccountPageWithLayout = withLayout(AccountPage);
const DashboardPageWithAuth = withAuth(DashboardPageWithLayout);
const AccountPageWithAuth = withAuth(AccountPageWithLayout);

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/sign-up" component={LoginPage} />
    <Route exact path="/home" component={DashboardPageWithAuth} />
    <Route exact path="/account" component={AccountPageWithAuth} />
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
  </Switch>
);

export default Routes;
