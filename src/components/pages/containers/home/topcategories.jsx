import React, {Component} from "react";
import {Col, Row, Container} from "reactstrap"

export default class TopCategories extends Component {

    render() {
        return (
            <Container className="top-categories-section">
                <h1 className="top-title">Top categories</h1>
                <Row>
                    <Col lg="3" md="6" sm="6" xs="12" className="categ-columns">
                        <div className="top-categories-blocks">
                            <img alt="java" src={require('../../../../img/logos/java.png')}/>
                            <h4>Java</h4>
                        </div>
                    </Col>
                    <Col lg="3" md="6" sm="6" xs="12" className="categ-columns">
                        <div className="top-categories-blocks">
                            <img alt="java" src={require('../../../../img/logos/jawascript.png')}/>
                            <h4>JavaScript</h4>
                        </div>
                    </Col>
                    <Col lg="3" md="6" sm="6" xs="12" className="categ-columns">
                        <div className="top-categories-blocks">
                            <img alt="magento" src={require('../../../../img/logos/magento.png')}/>
                            <h4>Magento</h4>
                        </div>
                    </Col>
                    <Col lg="3" md="6" sm="6" xs="12" className="categ-columns">
                        <div className="top-categories-blocks">
                            <img alt="php" src={require('../../../../img/logos/php.png')}/>
                            <h4>PHP</h4>

                        </div>
                    </Col>
                    <Col lg="3" md="6" sm="6" xs="12" className="categ-columns">
                        <div className="top-categories-blocks">
                            <img alt="python" src={require('../../../../img/logos/python.png')}/>
                            <h4>Python</h4>
                        </div>
                    </Col>
                    <Col lg="3" md="6" sm="6" xs="12" className="categ-columns">
                        <div className="top-categories-blocks">
                            <img alt="swift" src={require('../../../../img/logos/swift.png')}/>
                            <h4>Swift</h4>
                        </div>
                    </Col>
                    <Col lg="3" md="6" sm="6" xs="12" className="categ-columns">
                        <div className="top-categories-blocks">
                            <img alt="wordpress" src={require('../../../../img/logos/wordpress.png')}/>
                            <h4>Wordpress</h4>
                        </div>
                    </Col>
                    <Col lg="3" md="6" sm="6" xs="12" className="categ-columns">
                        <div className="top-categories-blocks">
                            <img alt="plus" src={require('../../../../img/logos/c-plus-plus-logo.png')}/>
                            <h4>C++</h4>
                        </div>
                    </Col>
                </Row>
                <Col lg="12" md="12" sm="12" xs="12" className="btn-cat-block">
                    <button className="btn-red">VIEW ALL CATEGORIES</button>
                </Col>
            </Container>
        );
    }
}