
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountMaster from"views/Transactions/Transactions.js";

// core components
import Admin from "layouts/Admin.js";
import Loginpage from "views/LoginPage.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    
      <Route path="/admin" component={Admin} />
    
      
  <Loginpage/>
    </Switch>
  </Router>,
  document.getElementById("root")
);
