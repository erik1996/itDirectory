import React, {Component} from 'react'
import {Row, Col} from 'reactstrap';
import Pagination from '../../../static/pages/pagination'


export default class CategoryListing extends Component {
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
                }, {
                    "img": "3.png",
                    'name': "Fifth company",
                    'location': "Zeytun Yerevan",
                    'subname': "Second name",
                }, {
                    "img": "4.png",
                    'name': "Fifth company",
                    'location': "Zeytun Yerevan",
                    'subname': "Second name",
                }, {
                    "img": "4.png",
                    'name': "PHP",
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
            showPerPage: 6
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
        const {pagesCount, activePage} = this.state;
        const show = this.state.companies.slice(this.state.activePage * this.state.showPerPage, (this.state.activePage + 1) * this.state.showPerPage);

        return (
            <div className="page">
                <h3>100 Job Listing</h3>
                <Row className="company-row">

                    {
                        show.map((val, key) => (

                            <Col key={key} lg="4" md="6" sm="6" xs="12" className="company-block">
                                <div className="comp-div">
                                    <div className="company-img-block">
                                        <img alt={val['img']} src={require('../../../../img/company/' + val['img'])}/>
                                    </div>
                                    <p>{val['name']}</p>
                                    <small>{val['subname']}</small>
                                    <hr/>
                                    <div>
                                        <small className="comp-loc">{val['location']}</small>
                                        <button>APPLY NOW</button>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>

                <Pagination
                    pagesCount={pagesCount}
                    activePage={activePage}
                    setActivePage={this.setActivePage.bind(this)}
                />
            </div>


        );
    }
}