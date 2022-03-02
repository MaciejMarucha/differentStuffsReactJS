import {Button, Form} from "react-bootstrap";
import React from "react";
import './Login.css';
import {Link, withRouter} from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            logged: this.props.logged
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    login(event) {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) === email) {
                if (localStorage.getItem(email) === password) {
                    this.props.login();
                    return;
                } else {
                    alert("niepoprawne hasło");
                    this.setState({
                        password: ""
                    });
                    return;
                }
            }
        }
        alert("niepoprawny email");
        this.setState({
            email: "",
            password: ""
        });
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (<div>
                <div className="loginForm">
                    <Form onSubmit={this.login}
                    >
                        <Form.Group>
                            <h1>Login</h1>
                            <Form.Control type="email" placeholder="email" name="email" required
                                          value={this.state.email}
                                          pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                                          title="identyfikator może zawierać tylko litery angielskie małe lub duże, liczby i znaki: . _ % + - Domena - małe litery angielskie, liczby i znaki . -  Domena najwyszego poziomu - tylko małe litery angielskie - długość 2-3 znaki "
                                          onChange={this.handleChange}/>
                            <br/>
                            <Form.Control type="password" placeholder="password" name="password" required
                                          onChange={this.handleChange} value={this.state.password}/>
                            <br/>
                            <Button variant="primary" type="submit" block>Login</Button>
                        </Form.Group>
                    </Form>
                    <Link to="/register">Create an account!</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
