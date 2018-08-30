import React ,{Component} from 'react';
import {Row, Col
} from 'reactstrap';


export default class FooterImg extends Component{
    render (){
        return (

            <div className="footerAbout">
                <h5 className="footer-titles">CONNECT WITH </h5>
                <Row>
                    <Col lg="4" md="4" sm="4" xs="4" className="socIcon">
                        <i className="fab fa-instagram"></i>
                    </Col>
                    <Col lg="4" md="4" sm="4" xs="4" className="socIcon">
                        <i className="fab fa-linkedin-in"></i>
                    </Col>
                    <Col lg="4" md="4" sm="4" xs="4" className="socIcon">
                        <i className="fab fa-facebook-f"></i>

                    </Col>
                </Row>

            </div>
        );
    }
}