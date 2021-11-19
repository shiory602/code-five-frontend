import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard.js";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
// import Wrapper from "../components/Wrapper/Wrapper";
import { createBrowserHistory } from "history";
import History from "../components/History/History";
import Approval from "../components/Approval/Approval";
import Settings from "../components/Settings/Settings";

const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    {/* <Wrapper> */}
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/history" component={History} />
        <Route path="/approval" component={Approval} />
        <Route path="/settings" component={Settings} />
      </Switch>
    {/* </Wrapper> */}
  </Router>
);

export { history, AppRouter as default };
