import React from "react";
import {Link, withRouter} from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import './Registration.css';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
    }
    register(event) {
        event.preventDefault();
        const email =  this.state.email;
        const password = this.state.password;

        for(let i=0; i<localStorage.length;i++){
            if(localStorage.key(i) === email){
                alert("istnieje już taki użytkownik!");
                this.setState({
                    email: "",
                    password: ""
                });
                localStorage.setItem("logged", "false");
                return;
            }
        }
        localStorage.setItem(email, password);
        alert("zarejestrowano!");
        this.props.history.push("/");
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    render() {
        return (
            <div className="registerForm">
                <Form onSubmit={this.register}>
                    <Form.Group>
                        <h1>Register</h1>
                        <Form.Control type="email" placeholder="email" name="email" required onChange={this.handleChange} value={this.state.email}
                                      pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="identyfikator może zawierać tylko litery angielskie małe lub duże, liczby i znaki: . _ % + - Domena - małe litery angielskie, liczby i znaki . -  Domena najwyszego poziomu - tylko małe litery angielskie - długość 2-3 znaki "
                                      maxLength="30"
                        />
                        <br/>
                        <Form.Control type="password" placeholder="password" name="password" required onChange={this.handleChange} value={this.state.password} minLength="6" maxLength="20" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}"
                                      title="Hasło musi zawierać przynajmniej jedną literę małą i dużą, przynajmniej jedną liczbę, długośc min=6, długość max=20"
                        />
                        <br/>
                        <Button variant="dark" type="submit" block>Register</Button>
                    </Form.Group>
                </Form>
                <Link to="/">Login</Link>
            </div>
        );
    }
}

export default withRouter(Registration);
