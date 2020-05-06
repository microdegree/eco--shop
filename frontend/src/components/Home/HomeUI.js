import React, { Component, Fragment } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";

class HomeUI extends Component {
    render() {
        return (
            <Jumbotron style={{ backgroundColor: '#fff' }}>
                <Container>
                    <Row>
                        <Col> <img
                            src="https://image.freepik.com/free-vector/earth-planet-with-ecology-trees-ribbon_24877-55707.jpg" /></Col>
                        <Col>
                            <br /><br /> <br /><br /><br /><br /><br /><br />
                            <h1 style={{ color:'#258B00' }}>Bridging Vendors to Users</h1>
                            <p style={{ color:'#258B00' }}> Solving the ground level issue of preordering items from brands directly. Making restocking inventory as seamless as possible</p>
                            <p><Button variant="success" href='/login'>Signin</Button></p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default HomeUI;
