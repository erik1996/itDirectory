import React, {Component} from 'react'
import './styles/style.css'

import Menu from './components/static/header/menu.jsx'
import HeaderTools from './components/static/header/headerTools.jsx'
import HeaderContent from './components/static/header/headerContent.jsx'
import FooterAbout from './components/static/footer/footerAbout.jsx'
import FooterImg from './components/static/footer/footerImg.jsx'
import FooterSocial from './components/static/footer/footerSocial.jsx'
import FooterMenu from './components/static/footer/footerMenu.jsx'
import {Container, Row, Col} from 'reactstrap';


export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            '/home': {'img': 'home-cover.png', 'search': true, 'searchTitle': 'Explore thousand IT companies with form','map':false,'title': ''},
            '/companies': {'img': 'company.png', 'search': true, 'searchTitle': 'Explore thousand IT companies with form','map':false,'title': ''},
            '/company': {'img': 'company.png', 'search': false, 'searchTitle': '','map': false,'title': '','height':true},
            '/categories': {'img': 'categories.png', 'search': true, 'searchTitle': '','map':false,'title': ''},
            '/blog': {'img': 'home-cover.png', 'search': false, 'searchTitle': '','map':false,'title': 'Blog'},
            '/contact': {'img': 'contact.png', 'search': false, 'searchTitle': '','map':true,'title': ''},
            '/login': {'img': 'home-cover.png', 'search': false, 'searchTitle': '','map':false,'title': ''},
            '/signup': {'img': 'home-cover.png', 'search': false, 'searchTitle': '','map':false,'title': ''},
            '/post': {'img': 'home-cover.png', 'search': false, 'searchTitle': '','map':false,'title': '','height':true}
        }
    }


    render() {
        const pathname = this.props.location.pathname;
        const pathInfo = this.state[pathname];


        return (
            <div id="whole">
                <div id="header" style={{backgroundImage: `url(${require('./img/layouts/' + pathInfo['img'])}`}}>
                    <Container>
                        <Row className="header-row-menu">
                            <Col lg={{size: 'auto', offset: 2}} md={{size: 'auto', offset: 0}} sm={{size: 4, offset: 0}}
                                 xs={{size: 1, offset: 0}}>
                                <Menu currentPath={pathname}/>

                            </Col>
                            <Col lg={{size: 4, offset: 1}} md={{size: "auto", offset: 0}} sm={{size: 7, offset: 1}}
                                 xs={{size: 9, offset: 2}}>
                                <HeaderTools/>
                            </Col>
                        </Row>
                    </Container>

                        <HeaderContent pathInfo={pathInfo} />
                </div>
                <div id="content-section">
                    {React.cloneElement(this.props.children)}
                </div>
                <div id="footer">
                    <Container>
                        <Row>
                            <Col lg="5" md="5" sm="12" xs="12">
                                <FooterAbout/>
                            </Col>
                            <Col lg={{size: 3, offset: 1}} md={{size: 3, offset: 1}} sm={{size: 6, offset: 0}}
                                 xs={{size: 8, offset: 0}}>
                                <FooterImg/>
                            </Col>
                            <Col lg={{size: 2, offset: 1}} md={{size: 2, offset: 1}} sm={{size: 5, offset: 1}}
                                 xs={{size: 8, offset: 0}}>
                                <FooterSocial/>
                            </Col>
                        </Row>
                    </Container>
                    <div className="container-fluid foot-menu-cont">
                        <FooterMenu/>
                    </div>
                </div>
            </div>
        )
    }
}