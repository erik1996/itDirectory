import React, {Component} from 'react'
import {Row, Col} from 'reactstrap';
import Pagination from '../../../static/pages/pagination'


export default class BlogContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: [
                {
                    "img": "blog1.png",
                    'date': "March 29 2018",
                    'comments': 3,
                    'title': "Attrackt more attention to sales and profits",
                    'subTitle': "A job is regular esiminch progess in extange becoming a good staff for future.",
                },
                {
                    "img": "blog2.png",
                    'date': "August 29 2018",
                    'comments': 3,
                    'title': "Attrackt more attention to sales and profits",
                    'subTitle': "A job is regular esiminch progess in extange becoming a good staff for future.",
                },
                {
                    "img": "blog3.png",
                    'date': "January 29 2018",
                    'comments': 5,
                    'title': "Attrackt more attention to sales and profits",
                    'subTitle': "A job is regular esiminch progess in extange becoming a good staff for future.",
                },
                {
                    "img": "blog4.png",
                    'date': "March 29 2018",
                    'comments': 3,
                    'title': "Attrackt more attention to sales and profits",
                    'subTitle': "A job is regular esiminch progess in extange becoming a good staff for future.",
                },
                {
                    "img": "blog5.png",
                    'date': "October 29 2018",
                    'comments': 1,
                    'title': "Attrackt more attention to sales and profits",
                    'subTitle': "A job is regular esiminch progess in extange becoming a good staff for future.",
                },
                {
                    "img": "blog6.png",
                    'date': "March 29 2018",
                    'comments': 3,
                    'title': "Attrackt more attention to sales and profits",
                    'subTitle': "A job is regular esiminch progess in extange becoming a good staff for future.",
                },
                {
                    "img": "blog5.png",
                    'date': "June 29 2018",
                    'comments': 3,
                    'title': "Attrackt more attention to sales and profits",
                    'subTitle': "A job is regular esiminch progess in extange becoming a good staff for future.",
                },
                {
                    "img": "blog2.png",
                    'date': "March 29 2018",
                    'comments': 2,
                    'title': "Attrackt more attention to sales and profits",
                    'subTitle': "A job is regular esiminch progess in extange becoming a good staff for future.",
                },
                {
                    "img": "blog5.png",
                    'date': "March 29 2018",
                    'comments': 3,
                    'title': "Attrackt more attention to sales and profits",
                    'subTitle': "A job is regular esiminch progess in extange becoming a good staff for future.",
                },
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
                <Row className="company-row">

                    {
                        show.map((val, key) => (

                            <Col key={key} lg="4" md="6" sm="6" xs="12" className="blogs-block">
                                <div className="blog-inner">
                                <div className="blog-img">
                                    <img alt={val['img']} src={require('../../../../img/blogs/' + val['img'])}/>
                                </div>
                                <div className="blog-info">
                                    <div className="date-com-block">
                                        <p className="date-com com1">{val['date']}</p>
                                        <p className="date-com">{val['comments']} Comments</p>
                                        <p className="blog-title">{val['title']}</p>
                                    </div>
                                    <div className="about-blog">
                                        <p>{val['subTitle']}</p>
                                    </div>
                                </div>
                                    <div className="space"></div>
                                <div className="blog-button-blog">
                                    <hr/>
                                    <button>Read More <i className="fas fa-long-arrow-alt-right"></i></button>
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