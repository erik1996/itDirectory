import React ,{Component} from 'react';
import { Row, Col } from 'reactstrap';


export default class FooterImg extends Component{
    render (){
        return (
            <div className="footerAbout">
                <h5 className="footer-titles">PHOTO GALLERY</h5>
                <Row>
                    <Col lg="4" md="4" sm="4" xs="4">
                        <img alt="footer1" src={require('../../../img/photos/1.png')}/>
                    </Col>
                    <Col lg="4" md="4" sm="4" xs="4">
                        <img alt="footer2" src={require('../../../img/photos/2.png')}/>
                    </Col>
                    <Col lg="4" md="4" sm="4" xs="4">
                        <img alt="footer3" src={require('../../../img/photos/3.png')}/>
                    </Col>
                </Row>
                <Row>
                    <Col lg="4" md="4" sm="4" xs="4">
                        <img alt="footer4" src={require('../../../img/photos/4.png')}/>
                    </Col>
                    <Col lg="4" md="4" sm="4" xs="4">
                        <img alt="footer5" src={require('../../../img/photos/5.png')}/>
                    </Col>
                    <Col lg="4" md="4" sm="4" xs="4">
                        <img alt="footer6" src={require('../../../img/photos/6.png')}/>
                    </Col>
                </Row>
                <Row>
                    <Col lg="4" md="4" sm="4" xs="4">
                        <img alt="footer7" src={require('../../../img/photos/7.png')}/>
                    </Col>
                    <Col lg="4" md="4" sm="4" xs="4">
                        <img alt="footer8" src={require('../../../img/photos/8.png')}/>
                    </Col>
                    <Col lg="4" md="4" sm="4" xs="4">
                        <img alt="footer9" src={require('../../../img/photos/9.png')}/>
                    </Col>
                </Row>
            </div>
        );
    }
}