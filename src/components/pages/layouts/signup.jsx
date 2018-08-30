import React, {Component} from "react"
import {Container, Col, Row, Form, FormGroup, Input, Label, Button} from 'reactstrap';

export default class SignUp extends Component {

    render() {
        return (
            <div>
                <div className="login-header">
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="6" xs="12">
                                <h2>Sign Up</h2>
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
                <Container className="sign-up-block">
                    <h3>Company Details</h3>
                    <Row>
                        <Col lg="5" md="5" sm="5" xs="12">
                            <Form>
                                <FormGroup>
                                    <Label for="username" className="position-label">Offered Salary</Label>
                                    <div className="input-group">
                                        <Input className="sign-up-inputs with-icons-select" type="select"
                                               name="fullName" id="username">
                                            <option>15.000-20.000</option>
                                            <option>25.000-30.000</option>
                                            <option>35.000-40.000</option>
                                            <option>45.000-50.000</option>
                                            <option>55.000-60.000</option>
                                        </Input>
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="far fa-keyboard"></i>
                                            </span>
                                        </div>
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="address" className="position-label">Industry</Label>
                                    <div className="input-group">
                                        <Input className="sign-up-inputs with-icons" type="select" name="email"
                                               id="password"
                                               >
                                            <option>Marketing</option>
                                            <option>25.000-30.000</option>
                                            <option>35.000-40.000</option>
                                            <option>45.000-50.000</option>
                                            <option>55.000-60.000</option>
                                        </Input>
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="far fa-keyboard"></i>
                                            </span>
                                        </div>
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="address" className="position-label">Phone number</Label>
                                    <div className="input-group">
                                        <Input className="sign-up-inputs with-icons" type="email" name="email"
                                               id="password"
                                               placeholder="+37461255652"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="far fa-keyboard"></i>
                                            </span>
                                        </div>
                                    </div>

                                </FormGroup>
                            </Form>
                        </Col>
                        <Col lg={{size: 5, offset: 2}} md="5" sm="5" xs="12">
                            <Form>
                                <FormGroup>
                                    <Label for="address" className="position-label">Company Address</Label>
                                    <div className="input-group">
                                        <Input className="sign-up-inputs with-icons" type="text" name="fullName"
                                               id="address"
                                               placeholder="New Jersey Washingtaon 4 apt 13"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="far fa-keyboard"></i>
                                            </span>
                                        </div>
                                    </div>

                                </FormGroup>
                                <FormGroup>
                                    <Label for="address" className="position-label">Website</Label>
                                    <div className="input-group">
                                        <Input className="sign-up-inputs with-icons" type="email" name="email"
                                               id="password"
                                               placeholder="www.facebook.com"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="far fa-keyboard"></i>
                                            </span>
                                        </div>
                                    </div>

                                </FormGroup>
                                <FormGroup>
                                    <Label for="address" className="position-label">Email Address</Label>
                                    <div className="input-group">
                                        <Input className="sign-up-inputs with-icons" type="email" name="email"
                                               id="password"
                                               placeholder="johndoe@mail.com"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="far fa-keyboard"></i>
                                            </span>
                                        </div>
                                    </div>

                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>

                    <h3>Company Details</h3>
                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">
                            <Form>
                                <FormGroup>
                                    <Input className="textarea-block" type="textarea" name="text" id="exampleText"/>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg="5" md="5" sm="5" xs="12">
                            <h3>History</h3>
                            <Form>
                                <FormGroup>
                                    <Input className="sign-up-inputs" type="text" name="fullName" id="username"
                                           placeholder="Titles"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input className="sign-up-inputs" type="email" name="email" id="password"
                                           placeholder="Years"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input className="sign-up-inputs" type="email" name="email" id="password"
                                           placeholder="About"/>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col lg={{size: 5, offset: 2}} md="5" sm="5" xs="12">
                            <h3>Work Experience</h3>
                            <Form>
                                <FormGroup>
                                    <Input className="sign-up-inputs" type="text" name="fullName" id="username"
                                           placeholder="Titles"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input className="sign-up-inputs" type="email" name="email" id="password"
                                           placeholder="Years"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input className="sign-up-inputs" type="email" name="email" id="password"
                                           placeholder="About"/>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="5" md="5" sm="5" xs="12">
                            <h3>Portfolio</h3>
                            <Form>
                                <FormGroup>
                                    <Input className="sign-up-inputs" type="text" name="fullName" id="username"
                                           placeholder="Titles"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input className="sign-up-inputs" type="email" name="email" id="password"
                                           placeholder="Years"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input className="sign-up-inputs" type="email" name="email" id="password"
                                           placeholder="About"/>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col lg={{size: 5, offset: 2}} md="5" sm="5" xs="12">
                            <h3>Awards</h3>
                            <Form>
                                <FormGroup>
                                    <Input className="sign-up-inputs" type="text" name="fullName" id="username"
                                           placeholder="Titles"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input className="sign-up-inputs" type="email" name="email" id="password"
                                           placeholder="Years"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input className="sign-up-inputs" type="email" name="email" id="password"
                                           placeholder="About"/>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                    <div className="sign-up-button-block">
                        <Button>Register Now</Button>
                    </div>

                </Container>
            </div>
        )
    }
}