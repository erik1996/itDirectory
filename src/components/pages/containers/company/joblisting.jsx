import React, {Component} from 'react'
import {Row, Col} from 'reactstrap';
import Pagination from '../../../static/pages/pagination'


export default class JobListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: [
                {
                    "img": "1.png",
                    'name': "First company",
                    'location': "Arabkir Yerevan",
                    'subname': "Second name",
                },
                {
                    "img": "2.png",
                    'name': "Second company",
                    'location': "Koryun Yerevan",
                    'subname': "Second name",
                },
                {
                    "img": "3.png",
                    'name': "Third company",
                    'location': "LA Yerevan",
                    'subname': "Second name",
                },
                {
                    "img": "4.png",
                    'name': "Fourth company",
                    'location': "Florida Yerevan",
                    'subname': "Second name",
                },
                {
                    "img": "5.png",
                    'name': "Fifth company",
                    'location': "Zeytun Yerevan",
                    'subname': "Second name",
                },
                {
                    "img": "5.png",
                    'name': "Fifth company",
                    'location': "Zeytun Yerevan",
                    'subname': "Second name",
                },
                {
                    "img": "3.png",
                    'name': "Fifth company",
                    'location': "Zeytun Yerevan",
                    'subname': "Second name",
                }, {
                    "img": "2.png",
                    'name': "Fifth company",
                    'location': "Zeytun Yerevan",
                    'subname': "Second name",
                }
            ],

            pagesCount: 0,
            activePage: 0,
            showPerPage: 2
        };
    }

    componentWillMount() {
        this.setState({
            pagesCount: Math.ceil(this.state.companies.length / this.state.showPerPage),
        });
    }

    setActivePage(key) {
        this.setState({
            activePage: key,
        });
    }

    render() {
        const {pagesCount, activePage, companies, showPerPage} = this.state;
        const show = companies.slice(activePage * showPerPage, (activePage + 1) * showPerPage);

        return (
            <div className="page">
                <h3>100 Job Listing</h3>
                {
                    show.map((val, key) => (

                        <Row key={key} className="company-row">
                            <Col sm="2" className="company-logo">
                                <img alt={val['img']} src={require('../../../../img/company/' + val['img'])}/>
                            </Col>
                            <Col sm="7" className="company-text">
                                <p>{val['name']}</p>
                                <p>{val['subname']}</p>
                                <strong><span className="fas fa-map-marker-alt"></span> {val['location']}</strong>
                            </Col>
                            <Col sm="3" className="star-bar-block">
                                <div className="star-bar">
                                    <span className="fas fa-star star-icon checked"></span>
                                    <span className="fas fa-star star-icon checked"></span>
                                    <span className="fas fa-star star-icon checked"></span>
                                    <span className="fas fa-star star-icon checked"></span>
                                    <span className="far fa-star star-icon unchecked"></span>
                                </div>
                                <div>
                                    <p>Company rating</p>
                                </div>
                            </Col>
                        </Row>
                    ))
                }

                <Pagination
                    pagesCount={pagesCount}
                    activePage={activePage}
                    setActivePage={this.setActivePage.bind(this)}
                />
            </div>


        );
    }
}