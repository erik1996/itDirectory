import React, {Component} from 'react'
import {Row, Col, Button, Container} from 'reactstrap';
import Map from './googlemap';


export default class HeaderContent extends Component {


    render() {
        const {title, searchTitle, search, map ,height} = this.props.pathInfo;
        return (
            <div>
                {
                    title ? (<h3 className="headerTitleText">{title}</h3>) : ('')
                }
                {
                    height ? (
                        <Container id="headerSearch">
                            {
                                searchTitle ? (<h3 className="headerSearchText">{searchTitle}</h3>) : ('')
                            }
                            {
                                search ?
                                    <Row>
                                        <Col lg="6" md="6" sm="12" xs="12">
                                            <div className="input-group">
                                                <input className="form-control header-inputs" type="text"
                                                       placeholder="Search by company name or category"/>
                                                <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="far fa-keyboard"></i>
                                            </span>
                                                </div>
                                            </div>

                                        </Col>
                                        <Col lg="4" md="4" sm="8" xs="9">
                                            <div className="input-group">
                                                <input className="form-control header-inputs" type="text"
                                                       placeholder="London"/>
                                                <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg="2" md="2" sm="4" xs="3">
                                            <Button className="header-search-button">
                                                <i className="fas fa-search"></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                    : ""
                            }
                        </Container>
                    ) : ""
                }
                {
                    map ? <Map/> : ""
                }
            </div>
        );
    }
}
