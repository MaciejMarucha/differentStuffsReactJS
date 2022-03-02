import React from "react";
import {Button, Form, Nav, Navbar, Table} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import './Account.css';

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            form: false,
            email: "",
            firstName: "",
            lastName: "",
            street: "",
            nr: "",
            flat: "",
            postalCode: "",
            city: "",
            phone: ""
        };
        this.logout = this.logout.bind(this);
        this.zobacz = this.zobacz.bind(this);
        this.cofnij = this.cofnij.bind(this);
        this.formularz = this.formularz.bind(this);
        this.kup = this.kup.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    logout() {
        this.props.logout();
    }

    zobacz(id, e) {
        this.setState({
            id: id
        });
    }
    cofnij(){
        this.setState({
            id: "",
            form: false
        })
    };
    formularz(){
        this.setState({
            form: true
        });
    }
    kup(event){
        event.preventDefault();
        const klient = {
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            street: this.state.street,
            nr: this.state.nr,
            flat: this.state.flat,
            postalCode: this.state.postalCode,
            city: this.state.city,
            phone: this.state.phone
        };
        const ksiazka = {
            idKsiazki: this.state.id
        };
        const a = JSON.stringify(klient);
        const b = JSON.stringify(ksiazka);
        localStorage.setItem(a, b);
        alert(a+" kupił "+b);
        this.setState({
            id: "",
            form: false,
            email: "",
            firstName: "",
            lastName: "",
            street: "",
            nr: "",
            flat: "",
            postalCode: "",
            city: "",
            phone: ""
        });
    }
    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const id = this.state.id;
        const form = this.state.form;
        let tresc;
        let formDiv;
        switch (id) {
            case 1:
                tresc = <div><Table striped bordered hover variant="dark"><tbody><tr><td>Tytuł</td><td>Lalka</td></tr><tr><td>Imie autora</td><td>Adam</td></tr><tr><td>Nazwisko autora</td><td>Wlazły</td></tr><tr><td>Rok wydania</td><td>2011</td></tr><tr><td>Cena (zł)</td><td>10</td></tr><tr><td>Wydawnictwo</td><td>Czarna Trąbka</td></tr><tr><td>Język wydania</td><td>polski</td></tr><tr><td>Liczba stron</td><td>450</td></tr><tr><td>Forma</td><td>książka</td></tr><tr><td>Indeks</td><td>3493849</td></tr><tr><td>Numer wydania</td><td>III</td></tr><tr><td>Opis</td><td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt vulputate tortor in sollicitudin. Vivamus vehicula elit sed augue vestibulum, eget fermentum risus viverra. Nunc ut tellus justo. Morbi vestibulum turpis eros, in iaculis metus viverra nec. Integer ac mauris tristique, luctus justo euismod, tincidunt leo. Maecenas dignissim ornare laoreet. Ut facilisis rutrum est in vehicula. Morbi pellentesque malesuada leo, eu sollicitudin enim pretium consectetur. In hac habitasse platea dictumst. In purus arcu, commodo non libero ac, pulvinar pretium felis. Suspendisse nulla leo, fermentum nec mauris a, euismod iaculis lectus. Integer nec mi dolor.</td></tr></tbody></Table><Button style={{marginRight: 20}} onClick={this.formularz}>Dalej</Button><Button variant="danger" onClick={this.cofnij}>Cofnij</Button></div>;
                break;
            case 2:
                tresc = <div><Table striped bordered hover variant="dark"><tbody><tr><td>Tytuł</td><td>Informatyka</td></tr><tr><td>Imię autora</td><td>Leszek</td></tr><tr><td>Nazwisko autora</td><td>Barnaba</td></tr><tr><td>Rok wydania</td><td>2002</td></tr><tr><td>Cena (zł)</td><td>19</td></tr><tr><td>Wydawnictwo</td><td>Czarna Owca</td></tr><tr><td>Język wydania</td><td>polski</td></tr><tr><td>Liczba stron</td><td>333</td></tr><tr><td>Forma</td><td>książka</td></tr><tr><td>Indeks</td><td>213849</td></tr><tr><td>Numer wydania</td><td>I</td></tr><tr><td>Opis</td><td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt vulputate tortor in sollicitudin. Vivamus vehicula elit sed augue vestibulum, eget fermentum risus viverra. Nunc ut tellus justo. Morbi vestibulum turpis eros, in iaculis metus viverra nec. Integer ac mauris tristique, luctus justo euismod, tincidunt leo. Maecenas dignissim ornare laoreet. Ut facilisis rutrum est in vehicula. Morbi pellentesque malesuada leo, eu sollicitudin enim pretium consectetur. In hac habitasse platea dictumst. In purus arcu, commodo non libero ac, pulvinar pretium felis. Suspendisse nulla leo, fermentum nec mauris a, euismod iaculis lectus. Integer nec mi dolor.</td></tr></tbody></Table><Button style={{marginRight: 20}} onClick={this.formularz}>Dalej</Button><Button variant="danger" onClick={this.cofnij}>Cofnij</Button></div>;
                break;
            case 3:
                tresc = <div><Table striped bordered hover variant="dark"><tbody><tr><td>Tytuł</td><td>Fizyka</td></tr><tr><td>Imie autora</td><td>Ola</td></tr><tr><td>Nazwisko autora</td><td>Schab</td></tr><tr><td>Rok wydania</td><td>2000</td></tr><tr><td>Cena (zł)</td><td>20</td></tr><tr><td>Wydawnictwo</td><td>Zamkor</td></tr><tr><td>Język wydania</td><td>polski</td></tr><tr><td>Liczba stron</td><td>386</td></tr><tr><td>Forma</td><td>książka</td></tr><tr><td>Indeks</td><td>12553</td></tr><tr><td>Numer wydania</td><td>II</td></tr><tr><td>Opis</td><td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt vulputate tortor in sollicitudin. Vivamus vehicula elit sed augue vestibulum, eget fermentum risus viverra. Nunc ut tellus justo. Morbi vestibulum turpis eros, in iaculis metus viverra nec. Integer ac mauris tristique, luctus justo euismod, tincidunt leo. Maecenas dignissim ornare laoreet. Ut facilisis rutrum est in vehicula. Morbi pellentesque malesuada leo, eu sollicitudin enim pretium consectetur. In hac habitasse platea dictumst. In purus arcu, commodo non libero ac, pulvinar pretium felis. Suspendisse nulla leo, fermentum nec mauris a, euismod iaculis lectus. Integer nec mi dolor.</td></tr></tbody></Table><Button style={{marginRight: 20}} onClick={this.formularz}>Dalej</Button><Button variant="danger" onClick={this.cofnij}>Cofnij</Button></div>;
                break;
            case 4:
                tresc = <div><Table striped bordered hover variant="dark"><tbody><tr><td>Tytuł</td><td>Plastyka dla europejczyka</td></tr><tr><td>Imie autora</td><td>Patrycja</td></tr><tr><td>Nazwisko autora</td><td>Martyniuk</td></tr><tr><td>Rok wydania</td><td>2010</td></tr><tr><td>Cena (zł)</td><td>27</td></tr><tr><td>Wydawnictwo</td><td>Agora</td></tr><tr><td>Język wydania</td><td>polski</td></tr><tr><td>Liczba stron</td><td>292</td></tr><tr><td>Forma</td><td>książka</td></tr><tr><td>Indeks</td><td>5734032</td></tr><tr><td>Numer wydania</td><td>I</td></tr><tr><td>Opis</td><td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt vulputate tortor in sollicitudin. Vivamus vehicula elit sed augue vestibulum, eget fermentum risus viverra. Nunc ut tellus justo. Morbi vestibulum turpis eros, in iaculis metus viverra nec. Integer ac mauris tristique, luctus justo euismod, tincidunt leo. Maecenas dignissim ornare laoreet. Ut facilisis rutrum est in vehicula. Morbi pellentesque malesuada leo, eu sollicitudin enim pretium consectetur. In hac habitasse platea dictumst. In purus arcu, commodo non libero ac, pulvinar pretium felis. Suspendisse nulla leo, fermentum nec mauris a, euismod iaculis lectus. Integer nec mi dolor.</td></tr></tbody></Table><Button style={{marginRight: 20}} onClick={this.formularz}>Dalej</Button><Button variant="danger" onClick={this.cofnij}>Cofnij</Button></div>;
                break;
            case 5:
                tresc = <div><Table striped bordered hover variant="dark"><tbody><tr><td>Tytuł</td><td>Geografia dla ułomnych</td></tr><tr><td>Imie autora</td><td>Marek</td></tr><tr><td>Nazwisko autora</td><td>Marczyński</td></tr><tr><td>Rok wydania</td><td>1998</td></tr><tr><td>Cena (zł)</td><td>25</td></tr><tr><td>Wydawnictwo</td><td>Operon</td></tr><tr><td>Język wydania</td><td>polski</td></tr><tr><td>Liczba stron</td><td>412</td></tr><tr><td>Forma</td><td>książka</td></tr><tr><td>Indeks</td><td>98055</td></tr><tr><td>Numer wydania</td><td>VII</td></tr><tr><td>Opis</td><td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt vulputate tortor in sollicitudin. Vivamus vehicula elit sed augue vestibulum, eget fermentum risus viverra. Nunc ut tellus justo. Morbi vestibulum turpis eros, in iaculis metus viverra nec. Integer ac mauris tristique, luctus justo euismod, tincidunt leo. Maecenas dignissim ornare laoreet. Ut facilisis rutrum est in vehicula. Morbi pellentesque malesuada leo, eu sollicitudin enim pretium consectetur. In hac habitasse platea dictumst. In purus arcu, commodo non libero ac, pulvinar pretium felis. Suspendisse nulla leo, fermentum nec mauris a, euismod iaculis lectus. Integer nec mi dolor.</td></tr></tbody></Table><Button style={{marginRight: 20}} onClick={this.formularz}>Dalej</Button><Button variant="danger" onClick={this.cofnij}>Cofnij</Button></div>;
                break;
        }
        if(form){
            formDiv =
            <div className="buyForm"><br/><br/>
                <Form onSubmit={this.kup}>
                    <h6>E-mail *</h6>
                    <Form.Control type="email" name="email"
                                  value={this.state.email} placeholder="jan.kowalski@gmail.com"
                                  pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="identyfikator może zawierać tylko litery angielskie małe lub duże, liczby i znaki: . _ % + - Domena - małe litery angielskie, liczby i znaki . -  Domena najwyszego poziomu - tylko małe litery angielskie - długość 2-3 znaki "
                                  onChange={this.handleChange} required
                    />
                    <h6>Imię *</h6>
                    <Form.Control name="firstName"
                                  value={this.state.firstName} placeholder="Jan"
                                  pattern="^[A-ZĆŁŃÓŚŻŹ]{1}[a-ząćęłńóśżź]{1,20}$" title="Imię może zawierać tylko litery w tym polskie. Pierwsza litera musi być duża. Max 20 znaków."
                                  onChange={this.handleChange} required
                    />
                    <h6>Nazwisko *</h6>
                    <Form.Control name="lastName"
                                  value={this.state.lastName} placeholder="Kowalski"
                                  pattern="^[A-ZĆŁŃÓŚŻŹ]{1}[a-ząćęłńóśżź]{1,30}$" title="Nazwisko może zawierać tylko litery w tym polskie. Pierwsza litera musi być duża. Max 30 znaków"
                                  onChange={this.handleChange} required
                    />
                    <h6>Ulica *</h6>
                    <Form.Control name="street"
                                  value={this.state.street} placeholder="Zielona"
                                  pattern="^[A-ZĆŁŃÓŚŻŹ]{1}[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ]{1,30}$" title="Nazwa ulicy może zawierać tylko litery w tym polskie. Pierwsza litera musi być duża"
                                  onChange={this.handleChange} required
                    />
                    <h6>Nr domu *</h6>
                    <Form.Control name="nr"
                                  value={this.state.nr} placeholder="10"
                                  pattern="[0-9]{1,4}$" title="Nr domu musi być liczbą max 4-cyfrową"
                                  onChange={this.handleChange} required
                    />
                    <h6>Nr mieszkania</h6>
                    <Form.Control name="flat"
                                  value={this.state.flat} placeholder="10"
                                  pattern="[0-9]{1,4}$" title="Nr mieszkania musi być liczbą max 4-cyfrową"
                                  onChange={this.handleChange} required
                    />
                    <h6>Kod pocztowy *</h6>
                    <Form.Control name="postalCode"
                                  value={this.state.postalCode} placeholder="00-000"
                                  pattern="[0-9]{2}-[0-9]{3}$" title="Wzór 00-000"
                                  onChange={this.handleChange} required
                    />
                    <h6>Miejscowość *</h6>
                    <Form.Control name="city"
                                  value={this.state.city} placeholder="Lublin"
                                  pattern="^[A-ZĆŁŃÓŚŻŹ]{1}[a-ząćęłńóśżź]{1,30}$" title="Nazwa miasta może zawiarać tylko litery w tym polskie. Pierwsza litera musi być duża. Max 30 znaków."
                                  onChange={this.handleChange} required
                    />
                    <h6>Telefon *</h6>
                    <Form.Control type="tel" name="phone"
                                  value={this.state.phone} placeholder="555444333"
                                  pattern="[0-9]{9}" title="Numer telefonu musi zawierać wyłącznie 9 cyfr"
                                  onChange={this.handleChange} required
                    /><br/>
                    <Button type="submit" block>Kupuję!</Button><br/>
                    <Button variant="danger" block onClick={this.cofnij}>Cofnij</Button>
                </Form>
            </div>;
        }
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
                <h1>Sklep</h1>
                <Table striped hover bordered responsive>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tytuł</th>
                        <th>Imię autora</th>
                        <th>Nazwisko autora</th>
                        <th>Rok wydania</th>
                        <th>Cena (zł)</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Lalka</td>
                        <td>Adam</td>
                        <td>Wlazły</td>
                        <td>2011</td>
                        <td>10</td>
                        <td><Button variant="danger" onClick={(e) => this.zobacz(1, e)}>Zobacz</Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Informatyka</td>
                        <td>Leszek</td>
                        <td>Barnaba</td>
                        <td>2001</td>
                        <td>19</td>
                        <td><Button variant="danger" onClick={(e) => this.zobacz(2, e)}>Zobacz</Button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Fizyka</td>
                        <td>Ola</td>
                        <td>Schab</td>
                        <td>2000</td>
                        <td>20</td>
                        <td><Button variant="danger" onClick={(e) => this.zobacz(3, e)}>Zobacz</Button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Plastyka dla europejczyka</td>
                        <td>Patrycja</td>
                        <td>Martyniuk</td>
                        <td>2010</td>
                        <td>27</td>
                        <td><Button variant="danger" onClick={(e) => this.zobacz(4, e)}>Zobacz</Button></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Geografia dla ułomnych</td>
                        <td>Marek</td>
                        <td>Marczyński</td>
                        <td>1998</td>
                        <td>25</td>
                        <td><Button variant="danger" onClick={(e) => this.zobacz(5, e)}>Zobacz</Button></td>
                    </tr>
                    </tbody>
                </Table>
                {tresc}
                {formDiv}
            </div>
        );
    }
}
export default withRouter(Account);
