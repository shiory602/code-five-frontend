import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// import Wrapper from "../components/Wrapper/Wrapper";

import { AuthProvider } from '../contexts/AuthContext';
import { ExpensesProvider } from '../contexts/ExpensesContext';

import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import History from "../components/History/History";
import Approval from "../components/Approval/Approval";
import Settings from "../components/Settings/Settings";

const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      {/* <Wrapper> */}
        <Switch>
          <AuthProvider>
            <ExpensesProvider>
              <PrivateRoute path="/" component={Dashboard} exact={true} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <PrivateRoute path="/history" component={History} />
              <PrivateRoute path="/approval" component={Approval} />
              <PrivateRoute path="/settings" component={Settings} />
            </ExpensesProvider>
          </AuthProvider>
        </Switch>
      {/* </Wrapper> */}
    </Router>
  )
};

export { history, AppRouter as default };
