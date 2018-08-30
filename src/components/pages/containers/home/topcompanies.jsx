import React, {Component} from "react";
import {Col, Row, Container,Button} from "reactstrap"

export default class TopCompanies extends Component{

    render(){
        return (
            <Container className="top-company-section">
                <h1 className="top-title">Top companies</h1>
                <Row>
                    <Col lg="6" md="6" sm="6" xs="12">
                        <div className="top-company-blocks">
                            <div className="d-inline-block top-company-inside-blocks top-company-text">
                                <h3>Local Jobs</h3>
                                <p>Lorem ipsum is simply dummy text with no meaning</p>
                                <Button className="btn-red d-inline-block">FIND OUT</Button>
                            </div>
                            <div className="d-inline-block top-company-inside-blocks top-company-img">
                                <img alt="ava1" src={require('../../../../img/avatars/ava1.png')} className="avatar"/>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" md="6" sm="6" xs="12">
                        <div className="top-company-blocks">
                            <div className="d-inline-block top-company-inside-blocks top-company-text">
                                <h3>Local Jobs</h3>
                                <p>Lorem ipsum is simply dummy text with no meaning</p>
                                <Button className="btn-red d-inline-block">FIND OUT</Button>
                            </div>
                            <div className="d-inline-block top-company-inside-blocks top-company-img">
                                <img alt="ava1" src={require('../../../../img/avatars/ava1.png')} className="avatar"/>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" md="6" sm="6" xs="12">
                        <div className="top-company-blocks">
                            <div className="d-inline-block top-company-inside-blocks top-company-text">
                                <h3>Local Jobs</h3>
                                <p>Lorem ipsum is simply dummy text with no meaning</p>
                                <Button className="btn-red d-inline-block">FIND OUT</Button>
                            </div>
                            <div className="d-inline-block top-company-inside-blocks top-company-img">
                                <img alt="ava1" src={require('../../../../img/avatars/ava1.png')} className="avatar"/>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" md="6" sm="6" xs="12">
                        <div className="top-company-blocks">
                            <div className="d-inline-block top-company-inside-blocks top-company-text">
                                <h3>Local Jobs</h3>
                                <p>Lorem ipsum is simply dummy text with no meaning</p>
                                <Button className="btn-red d-inline-block">FIND OUT</Button>
                            </div>
                            <div className="d-inline-block top-company-inside-blocks top-company-img">
                                <img alt="ava1" src={require('../../../../img/avatars/ava1.png')} className="avatar"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}