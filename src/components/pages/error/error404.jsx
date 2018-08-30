import React, {Component} from 'react'
import {Container, Col, Row, Button} from 'reactstrap';


export default class Error extends Component {

    render() {
        return (
            <div className="error-cont">
                <Container className="text-center">
                    <Row >
                        <Col>
                            <h1>404</h1>
                            <h5>We Are Sorry, Page Not Found</h5>
                            <input className="header-inputs" type="text"
                                   placeholder="Enter any keyword"/>
                            <Button className="header-search-button">
                                <i className="fas fa-search"></i>
                            </Button>

                        </Col>


                    </Row>
                    <Button className="header-search-button error-page-btn">
                        Back To HomePage
                    </Button>
                </Container>
            </div>
        );
    }
}