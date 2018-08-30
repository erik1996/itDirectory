import React, {Component} from "react";
import {Col, Row, Container, Button} from "reactstrap"

export default class HotCompany extends Component {


    render() {
        return (
            <Container className="hot-company-section">
                <Row>
                    <Col lg="9" md="12" sm="12" xs="12">
                        <Row>
                            <Col lg="8" md="8" sm="7" xs="6">
                                <h1 className="hot-company-title">Hot Companies</h1>
                            </Col>
                            <Col lg="4" md="4" sm="5" xs="6">
                                <Button className="d-inline-block btn-yell">VIEW ALL</Button>
                                <Button className="d-inline-block btn-white">DATE</Button>
                            </Col>
                        </Row>
                        <Row className="view-companies">
                            <Col lg="12" className="hot-companies">
                                <Row>
                                    <Col lg="10"  md="10" sm="auto" xs="12">
                                        <Row className="hot-title-progress-block">
                                            <Col lg="auto" md="auto" sm="auto" xs="12">
                                                <h4 className="name">Digital Marketing Digital</h4>
                                            </Col>
                                            <Col lg="auto" md="auto" sm="auto" xs="12">
                                                <div className="progress-company yell"></div>
                                            </Col>
                                        </Row>
                                        <Row className="company-prop-row">
                                            <Col lg="3"  md="4" sm="4" xs="4">
                                                <small>Salary</small>
                                            </Col>
                                            <Col lg="3"  md="4" sm="4" xs="4">
                                                <small>Employees</small>
                                            </Col>
                                            <Col lg="3"  md="4" sm="4" xs="4">
                                                <small>London</small>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={{ size: 2, offset: 0 }}  md={{ size: 2, offset: 0 }} sm={{ size: 2, offset: 5 }} xs={{ size: 2, offset: 4 }}>
                                            <img alt="php" src={require('../../../../img/logos/php.png')}/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="12" className="hot-companies">
                                <Row>
                                    <Col lg="10"  md="10" sm="auto" xs="12">
                                        <Row className="hot-title-progress-block">
                                            <Col lg="auto" md="auto" sm="auto" xs="12">
                                                <h4 className="name">Digital Marketing Executive Digital</h4>
                                            </Col>
                                            <Col lg="auto" md="auto" sm="auto" xs="12">
                                                <div className="progress-company red"></div>
                                            </Col>
                                        </Row>
                                        <Row className="company-prop-row">
                                            <Col lg="3"  md="4" sm="4" xs="4">
                                                <small>Salary</small>
                                            </Col>
                                            <Col lg="3"  md="4" sm="4" xs="4">
                                                <small>Employees</small>
                                            </Col>
                                            <Col lg="3"  md="4" sm="4" xs="4">
                                                <small>London</small>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={{ size: 2, offset: 0 }}  md={{ size: 2, offset: 0 }} sm={{ size: 2, offset: 5 }} xs={{ size: 2, offset: 4 }}>
                                        <img alt="php" src={require('../../../../img/logos/php.png')}/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="12" className="hot-companies">
                                <Row>
                                    <Col lg="10"  md="10" sm="auto" xs="12">
                                        <Row className="hot-title-progress-block">
                                            <Col lg="auto" md="auto" sm="auto" xs="12">
                                                <h4 className="name">Digital Marketing Executive Digital</h4>
                                            </Col>
                                            <Col lg="auto" md="auto" sm="auto" xs="12">
                                                <div className="progress-company yell"></div>
                                            </Col>
                                        </Row>
                                        <Row className="company-prop-row">
                                            <Col lg="3"  md="4" sm="4" xs="4">
                                                <small>Salary</small>
                                            </Col>
                                            <Col lg="3"  md="4" sm="4" xs="4">
                                                <small>Employees</small>
                                            </Col>
                                            <Col lg="3"  md="4" sm="4" xs="4">
                                                <small>London</small>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={{ size: 2, offset: 0 }}  md={{ size: 2, offset: 0 }} sm={{ size: 2, offset: 5 }} xs={{ size: 2, offset: 4 }}>
                                        <img alt="php" src={require('../../../../img/logos/php.png')}/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="12" className="hot-companies">
                                <Row>
                                    <Col lg="10"  md="10" sm="auto" xs="12">
                                        <Row className="hot-title-progress-block">
                                            <Col lg="auto" md="auto" sm="auto" xs="12">
                                                <h4 className="name">Digital Executive Digital</h4>
                                            </Col>
                                            <Col lg="auto" md="auto" sm="auto" xs="12">
                                                <div className="progress-company red"></div>
                                            </Col>
                                        </Row>
                                        <Row className="company-prop-row">
                                            <Col lg="3"  md="4" sm="4" xs="4">
                                                <small>Salary</small>
                                            </Col>
                                            <Col lg="3"  md="4" sm="4" xs="4">
                                                <small>Employees</small>
                                            </Col>
                                            <Col lg="3"  md="4" sm="4" xs="4">
                                                <small>London</small>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={{ size: 2, offset: 0 }}  md={{ size: 2, offset: 0 }} sm={{ size: 2, offset: 5 }} xs={{ size: 2, offset: 4 }}>
                                        <img alt="php" src={require('../../../../img/logos/php.png')}/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="12" className="hot-companies">
                                <Row>
                                    <Col lg="10"  md="10" sm="auto" xs="12">
                                        <Row className="hot-title-progress-block">
                                            <Col lg="auto" md="auto" sm="auto" xs="12">
                                                <h4 className="name">Digital Marketing Executive Digital</h4>
                                            </Col>
                                            <Col lg="auto" md="auto" sm="auto" xs="12">
                                                <div className="progress-company red"></div>
                                            </Col>
                                        </Row>
                                        <Row className="company-prop-row">
                                            <Col lg="3"  md="4" sm="4" xs="4">
                                                <small>Salary</small>
                                            </Col>
                                            <Col lg="3"  md="4" sm="4" xs="4">
                                                <small>Employees</small>
                                            </Col>
                                            <Col lg="3"  md="4" sm="4" xs="4">
                                                <small>London</small>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={{ size: 2, offset: 0 }}  md={{ size: 2, offset: 0 }} sm={{ size: 2, offset: 5 }} xs={{ size: 2, offset: 4 }}>
                                        <img alt="php" src={require('../../../../img/logos/php.png')}/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="12" className="hot-companies">
                                <Row>
                                    <Col lg="10"  md="10" sm="auto" xs="12">
                                        <Row className="hot-title-progress-block">
                                            <Col lg="auto" md="auto" sm="auto" xs="12">
                                                <h4 className="name">Digital Marketing Executive </h4>
                                            </Col>
                                            <Col lg="auto" md="auto" sm="auto" xs="12">
                                                <div className="progress-company yell"></div>
                                            </Col>
                                        </Row>
                                        <Row className="company-prop-row">
                                            <Col lg="3"  md="4" sm="4" xs="4">
                                                <small>Salary</small>
                                            </Col>
                                            <Col lg="3"  md="4" sm="4" xs="4">
                                                <small>Employees</small>
                                            </Col>
                                            <Col lg="3"  md="4" sm="4" xs="4">
                                                <small>London</small>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={{ size: 2, offset: 0 }}  md={{ size: 2, offset: 0 }} sm={{ size: 2, offset: 5 }} xs={{ size: 2, offset: 4 }}>
                                        <img alt="php" src={require('../../../../img/logos/php.png')}/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Col lg="12" md="12" sm="12" xs="12" className="btn-cmp-block">
                            <button className="btn-red">VIEW ALL COMPANIES</button>
                        </Col>
                    </Col>
                    <Col lg={{ size: 3, offset: 0}} md={{ size: 6, offset: 3}} sm={{ size: 8, offset: 2}} xs={{ size: 8, offset: 2}}>
                        <Col className="popular-categories">
                            <Col className="popular-categories-title">
                                <h5>Popular Categories</h5>
                            </Col>
                            <Col className="popular-categories-links">
                                <ul>
                                    <li>Lorem Ipsum</li>
                                    <li>Lorem Ipsum</li>
                                    <li>Lorem Ipsum</li>
                                    <li>Lorem Ipsum</li>
                                    <li>Lorem Ipsum</li>
                                </ul>
                            </Col>
                        </Col>
                        <Col className="master-skills">
                            <Col className="popular-categories-title">
                                <h5>How to master skills</h5>
                            </Col>
                            <Col className="sidebar-image">
                            </Col>
                            <Col lg="12" md="12" sm="12" xs="12" className="text-center">
                                <button className="btn-yell btn-sidebar">READ</button>
                            </Col>
                        </Col>
                    </Col>
                </Row>
            </Container>
        );
    }
}