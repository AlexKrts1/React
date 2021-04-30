import React, {Component} from 'react'
//import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {Jumbotron, Container} from 'react-bootstrap'

export default class Box extends Component {
    render() {
        return (
            <Jumbotron>
                <Container>
                    <h1>Fluid jumbotron</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of its
                        parent.
                    </p>
                </Container>
            </Jumbotron>
        );
    }

}