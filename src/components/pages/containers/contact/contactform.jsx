import React, {Component} from 'react'
import {Row, Col,Form,FormGroup,Label,Input,Button,Container} from 'reactstrap';

export default class ContactForm extends Component {


    render() {

        return (
            <Container className="container-contact">

                <h3>Contact Us</h3>
                <h5>Keep in touch</h5>
            <Row className="contact-form-row">
                <Col lg="5" md="6" sm="6" xs ="12">
                    <Form>
                        <FormGroup>
                            <Label for="fullName">Full Name</Label>
                            <Input type="text" name="fullName" id="fullName" placeholder="" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="subject">Subject</Label>
                            <Input type="text" name="subject" id="subject" placeholder="" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="message">Message</Label>
                            <Input type="textarea" name="text" id="message" />
                        </FormGroup>
                        <Button>Send</Button>
                    </Form>
                </Col>
                <Col lg={{ size: 5,offset: 1 }} md="6" sm="6" xs ="12" className="contact-icons-block">
                    <div><i className="contact-icons fas fa-map-marker-alt"></i> Jobify text my text is better than yours</div>
                    <div><i className="contact-icons fas fa-phone"></i> Call us: 0914215345</div>
                    <div><i className="contact-icons far fa-envelope"></i> Email: email@gmai.com</div>
                </Col>
            </Row>
            </Container>
        );
    }
}