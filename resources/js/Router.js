import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./views/Authentication/Login";
import Register from "./views/Authentication/Register";
import NotFound from "./views/NotFound/NotFound";

// User is LoggedIn
import PrivateRoute from "./PrivateRoute";
import Leads from "./views/Dashboard/Leads"; 

const Main = () => (
    <Switch>
        {/*User might LogIn*/}
        <Route exact path="/" component={Home} />
        {/*User will LogIn*/}
        <Route path="/authenticate/login" component={Login} />
        <Route path="/authenticate/register" component={Register} />

        {/* User is LoggedIn*/}
        <PrivateRoute path="/dashboard" component={Leads} />
        {/*Page Not Found*/}
        
        <Route component={NotFound} />
    </Switch>
);
export default Main;
