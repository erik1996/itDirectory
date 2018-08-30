import React, {Component} from 'react'
import {Container, Col, Row} from 'reactstrap';


export default class CompanyContent extends Component {

    render() {
        return (
            <Container className="company-content">
                <Row>
                    <Col xs={{"offset": 2, "size": 8}}>
                        <Row className="flex justify-content-center">
                            <Col xs={{"offset": 0, "size": 3}} className="text-center company-info-col">
                                <div className="company-logo-border ">
                                    <img alt="logo1" src={require('../../../img/logos/logo1.png')}/>
                                </div>
                                <h5>IT COMPANY NAME</h5>
                                <p>Development company</p>
                                <small>Member Since 2010</small>
                            </Col>
                        </Row>
                        <Row className="company-contact-text-block">
                            <Col className="company-contacts" xs="4">
                                <Row>
                                    <Col className="company-contact-text" xs="2"><i className="fa fa-search"></i></Col>
                                    <Col xs="10">
                                        <p>Offered Salary</p>
                                        <p>15.000-20.000</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="company-contacts" xs="4">
                                <Row>
                                    <Col className="company-contact-text" xs="2"><i className="fa fa-search"></i></Col>
                                    <Col xs="10">
                                        <p>Offered Salary</p>
                                        <p>15.000-20.000</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="company-contacts" xs="4">
                                <Row>
                                    <Col className="company-contact-text" xs="2"><i className="fa fa-search"></i></Col>
                                    <Col xs="10">
                                        <p>Offered Salary</p>
                                        <p>15.000-20.000</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="company-contacts" xs="4">
                                <Row>
                                    <Col className="company-contact-text" xs="2"><i className="fa fa-search"></i></Col>
                                    <Col xs="10">
                                        <p>Offered Salary</p>
                                        <p>15.000-20.000</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="company-contacts" xs="4">
                                <Row>
                                    <Col className="company-contact-text" xs="2"><i className="fa fa-search"></i></Col>
                                    <Col xs="10">
                                        <p>Offered Salary</p>
                                        <p>15.000-20.000</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="company-contacts" xs="4">
                                <Row>
                                    <Col className="company-contact-text" xs="2"><i className="fa fa-search"></i></Col>
                                    <Col xs="10">
                                        <p>Offered Salary</p>
                                        <p>15.000-20.000</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <span><h5>About Company</h5></span>
                            </Col>
                            <Col sm="3" className="star-bar-block">
                                <div className="company-social-icons"></div>
                                <div className="star-bar">
                                    <span className="fas fa-star star-blog-icon checked"></span>
                                    <span className="fas fa-star star-blog-icon checked"></span>
                                    <span className="fas fa-star star-blog-icon checked"></span>
                                    <span className="fas fa-star star-blog-icon checked"></span>
                                    <span className="far fa-star star-blog-icon unchecked"></span>
                                </div>
                                <div>
                                    <p>Company rating</p>
                                </div>
                            </Col>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                    beatae dolor ducimus ex exercitationem fugit illum ipsum iusto laboriosam,
                                    mollitia odio pariatur quia quos repudiandae similique tenetur ut voluptatibus
                                    voluptatum!
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Adipisci amet excepturi explicabo magnam, nobis rerum voluptate?
                                    Aperiam, culpa deserunt dignissimos doloremque ducimus expedita illo,
                                    nesciunt nostrum numquam sequi velit, voluptas!
                                </p>
                            </div>
                        </Row>
                        <Row>
                            <h5>History</h5>
                            <Col xs="12">
                                <Row>
                                    <Col xs='auto'>
                                        <img alt="123" src={require('../../../img/company/hat.png')}/>
                                    </Col>
                                    <Col>
                                        <ul className="about-history">
                                            <li className="about-history-title">Job History</li>
                                            <li>2008-2012</li>
                                            <li>Middle East Technical University Computer Science</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                                beatae dolor ducimus ex exercitationem fugit illum ipsum iusto
                                                laboriosam
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs="12">
                                <Row>
                                    <Col xs='auto'>
                                        <img alt="12333" src={require('../../../img/company/hat.png')}/>
                                    </Col>
                                    <Col>
                                        <ul className="about-history">
                                            <li className="about-history-title">Job History</li>
                                            <li>2008-2012</li>
                                            <li>Middle East Technical University Computer Science</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                                beatae dolor ducimus ex exercitationem fugit illum ipsum iusto
                                                laboriosam
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="blog-work-ex-block">
                            <h5>Work & Experience</h5>
                            <ul className="blog-work-ex">
                                <li>
                                    <div className="blog-work-ex-texts">
                                        <p className="blog-work-ex-p"><span>Web Designer </span> Inwave Studio</p>
                                        <span>2008 - 2012</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                            beatae dolor
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                            beatae dolor
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                            beatae dolor
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                            beatae dolor
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="blog-work-ex-texts">
                                        <p className="blog-work-ex-p"><span>Web Designer </span> Inwave Studio</p>
                                        <span>2008 - 2012</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                            beatae dolor
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </Row>
                        <Row>
                            <h5> Portfolio </h5>

                            <Col xs='12'>
                                <Row>
                                    <Col xs='3'>
                                        <div className="portfolio-img-blocks">
                                            <img alt="1.png" src={require('../../../img/portfolio/1.png')}/>
                                        </div>
                                    </Col>
                                    <Col xs='3'>
                                        <div className="portfolio-img-blocks">
                                            <img alt="2.png" src={require('../../../img/portfolio/2.png')}/>
                                        </div>
                                    </Col>
                                    <Col xs='3'>
                                        <div className="portfolio-img-blocks">
                                            <img alt="3.png" src={require('../../../img/portfolio/3.png')}/>
                                        </div>
                                    </Col>
                                    <Col xs='3'>
                                        <div className="portfolio-img-blocks">
                                            <img alt="4.png" src={require('../../../img/portfolio/4.png')}/>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="blog-work-ex-block">
                            <h5>Awards</h5>
                            <ul className="blog-work-ex">
                                <li>
                                    <div className="blog-work-ex-texts">
                                        <p className="blog-work-ex-p"><span>Web Designer </span></p>
                                        <span>2008 - 2012</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                            beatae dolor
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                            beatae dolor
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                            beatae dolor
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                            beatae dolor
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="blog-work-ex-texts">
                                        <p className="blog-work-ex-p"><span>Web Worker </span>  </p>
                                        <span>2008 - 2014</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                            beatae dolor
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                            beatae dolor
                                            Lorem ipsum do
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="blog-work-ex-texts">
                                        <p className="blog-work-ex-p"><span>Web Designer </span></p>
                                        <span>2008 - 2012</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                            beatae dolor
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </Row>
                    </Col>
                </Row>

            </Container>
        )
            ;
    }
}