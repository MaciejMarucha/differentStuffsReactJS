import React from "react";
import {withRouter} from "react-router-dom";
import {Button, Form, Nav, Navbar} from "react-bootstrap";
import './Weather.css';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: 0,
            desc: '',
            icon: '',
            city: ""
        };
        this.logout = this.logout.bind(this);
        this.pogoda = this.pogoda.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }
    logout() {
        this.props.logout();
    }

    pogoda(event) {
        event.preventDefault();
        const city = this.state.city;
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+city
            +'&units=Metric&appid=ee64bf75739dfd35f03d6867b2235f0f')
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    temp: responseData.main.temp,
                    desc: responseData.weather[0].description,
                    icon: responseData.weather[0].icon,
                })
            })
            .catch(err => console.error(err));
    }
    render() {
        const imgSrc = 'http://openweathermap.org/img/w/' + this.state.icon + '.png';
        return (
            <div>
                <Navbar collapseOnSelect expand="sm" bg="secondary" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/account">Sklep</Nav.Link>
                            <Nav.Link href="/account/weather">Pogoda</Nav.Link>
                            <Nav.Link href="/account/todo">Lista - do zrobienia</Nav.Link>
                            <Nav.Link onClick={this.logout}>Log out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <h2>Weather</h2>
                <div className="App">
                    <div className="weatherDiv">
                        <Form onSubmit={this.pogoda}>
                            <h6>Wpisz miasto</h6>
                            <Form.Control name="city"
                                          value={this.state.city}
                                          onChange={this.handleChange}
                            /><br/>
                            <Button type="submit" variant="success" block>Sprawdź pogodę!</Button>
                        </Form>
                    </div>
                    <h6>Temperatura: {this.state.temp} &#8451;</h6>
                    <h6>Opis[en]: {this.state.desc}</h6>
                    <img src={imgSrc} alt="Weather icon"/>
                </div>
            </div>
        );
    }
}

export default withRouter(Weather);
