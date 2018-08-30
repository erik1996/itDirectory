import React, {Component} from "react"
import {Container, Col, Row, Form, FormGroup, Input , CustomInput} from 'reactstrap';

export default class LogIn extends Component {


    render() {
        return (
            <div>
                <div className="login-header">
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="6" xs="12">
                                <h2>Login</h2>
                            </Col>
                            <Col lg="6" md="6" sm="6" xs="12">
                                <ul>
                                    <li>Home</li>
                                    <li>Pages</li>
                                    <li>Login</li>
                                </ul>
                            </Col>
                        </Row>

                    </Container>
                </div>
                <Container>
                    <Row className="register-block">
                        <Col lg="4">
                            <Form>
                                <FormGroup>
                                    <Input className="register-inputs" type="text" name="fullName" id="username" placeholder="Username"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input className="register-inputs" type="email" name="email" id="password" placeholder="********"/>
                                </FormGroup>
                                <FormGroup className="checked-block">
                                    <CustomInput className="checked-btn" type="checkbox" id="exampleCustomCheckbox" label="Remember me"/>
                                    <p className="forgot-pwd"><a href="" id="TooltipExample">Forgot Password?</a></p>
                                </FormGroup>
                                <FormGroup>
                                    <Input className="register-button" type="submit" name="email" id="password" value="Login "/>
                                </FormGroup>
                            </Form>
                            <div className="text-center hr-or-div">
                                <div className="hr-or">
                                     <hr className="hr-in-div d-inline-block"/>
                                </div>
                                <p className="d-inline-block"> Or </p>
                                <div className="hr-or">
                                    <hr className="hr-in-div float-right hr-or d-inline-block"/>
                                </div>
                            </div>
                            <div className="login-social">
                                <div><i className="fab fa-facebook-f"></i></div>
                                <div><i className="fab fa-twitter"></i></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}