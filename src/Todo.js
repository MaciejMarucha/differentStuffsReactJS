import React from "react";
import {withRouter} from "react-router-dom";
import {Button, Form, Nav, Navbar, Table} from "react-bootstrap";
import './Todo.css';

class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dane: [],
        };
        this.logout = this.logout.bind(this);
        this.dodaj = this.dodaj.bind(this);
    }

    logout() {
        this.props.logout();
    }

    dodaj(event){
        event.preventDefault();
        const {dane} = this.state;
        const newItem = this.newItem.value;
        this.setState({
            dane: [...this.state.dane, newItem]
        });
        this.addForm.reset();
    }

    render() {
        const {dane} = this.state;
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
                <h2>Todo</h2>
                <div className="formm">
                <Form ref={input => this.addForm = input} onSubmit={this.dodaj}>
                    <h6>Co chcesz zrobić?</h6>
                    <Form.Control ref={input => this.newItem = input} name="item" required/><br/>
                    <Button variant="secondary" type="submit" block>Dodaj!</Button>
                </Form>
                    <br/>
                </div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Do zrobienia!</th>
                    </tr>
                    </thead>
                    <tbody>
                    {dane.map((el, index) => {
                        return (
                            <tr ref={tr => this.usunTr = tr} key={el}>
                                <td>{index+1}</td>
                                <td>{el}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default withRouter(Todo);
