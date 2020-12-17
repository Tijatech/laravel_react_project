import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import AdminLogin from "./views/Login/Admin/AdminLogin";
import TeamLogin from "./views/Login/Team/TeamLogin";
import TPVLogin from "./views/Login/TPV/TPVLogin";
import Register from "./views/Register/Register";
import NotFound from "./views/NotFound/NotFound";

// User is LoggedIn
import PrivateRoute from "./PrivateRoute";
import AdminLeads from "./views/user/Admin/AdminLeads"; 

const Main = () => (
    <Switch>
        {/*User might LogIn*/}
        <Route exact path="/" component={Home} />
        {/*User will LogIn*/}
        <Route path="/admin_login" component={AdminLogin} />
        <Route path="/team_login" component={TeamLogin} />
        <Route path="/tpv_login" component={TPVLogin} />
        <Route path="/register" component={Register} />

        {/* User is LoggedIn as Admin*/}
        <PrivateRoute path="/admin_leads" component={AdminLeads} />
        {/*Page Not Found*/}
        
        <Route component={NotFound} />
    </Switch>
);
export default Main;
