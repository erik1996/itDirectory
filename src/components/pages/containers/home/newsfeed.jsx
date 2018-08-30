import React, {Component} from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Container, Row, Col
} from 'reactstrap';

export default class NewsFeed extends Component {
    render() {
        return (
            <Container className="news-feed">
                <h1 className="top-title">News Feed</h1>
                <Row>
                    <Col lg="4" md="4" sm="4" xs="12">
                        <Card className="news-feed-blocks">
                            <CardImg top width="100%"
                                     src={require('../../../../img/photos/news-1.png')}
                                     alt="Card image cap"/>
                            <CardBody>
                                <CardTitle>lorem Ipsum</CardTitle>
                                <CardSubtitle>Some quick example text to build on the card's content.</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" md="4" sm="4" xs="12" >
                        <Card className="news-feed-blocks">
                            <CardImg top width="100%"
                                     src={require('../../../../img/photos/news-2.png')}
                                     alt="Card image cap"/>
                            <CardBody>
                                <CardTitle>lorem Ipsum</CardTitle>
                                <CardSubtitle>Some quick example text to build on the card's content.</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" md="4" sm="4" xs="12">
                        <Card className="news-feed-blocks">
                            <CardImg top width="100%"
                                     src={require('../../../../img/photos/news-3.png')}
                                     alt="Card image cap"/>
                            <CardBody>
                                <CardTitle>lorem Ipsum</CardTitle>
                                <CardSubtitle>Some quick example text to build on the card's content.</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}