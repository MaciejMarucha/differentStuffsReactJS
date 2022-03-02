import React from 'react';
import Login from './Login';
import './App.css';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Registration from "./Registration";
import Account from "./Account";
import Weather from "./Weather";
import Todo from "./Todo";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login() {
        localStorage.setItem("logged", "true");
        this.props.history.push("/account");
    }

    logout() {
        localStorage.setItem("logged", "false");
        this.props.history.push("/login");
    }

    render() {
        return (
            <div className="App">
                <div className="section">
                    <Switch>
                        <Route exact path="/">
                            {localStorage.getItem("logged") === "true" ? <Redirect to="/account"/> :
                                <Redirect to="/login"/>}
                        </Route>
                        <Route exact path="/account">
                            {localStorage.getItem("logged") === "true" ? <Account logout={this.logout}/> :
                                <Redirect to="/login"/>}
                        </Route>
                        <Route exact path="/login">
                            {localStorage.getItem("logged") === "true" ? <Redirect to="/account"/> :
                                <Login login={this.login}/>}
                        </Route>
                        <Route exact path="/register">
                            {localStorage.getItem("logged") === "true" ? <Redirect to="/account"/> : <Registration/>}
                        </Route>
                        <Route exact path="/account/weather">
                            {localStorage.getItem("logged") === "true" ? <Weather logout={this.logout}/> : <Redirect to="/login"/>}
                        </Route>
                        <Route exact path="/account/todo">
                            {localStorage.getItem("logged") === "true" ? <Todo logout={this.logout}/> : <Redirect to="/login"/>}
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(App);
