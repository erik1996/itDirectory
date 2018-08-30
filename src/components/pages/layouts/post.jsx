import React,{Component} from "react"
import {Row, Col, Container} from 'reactstrap';
import Search from '../containers/Post/Search.jsx'
import Caregories from '../containers/Post/Caregories.jsx'
import RecentPosts from '../containers/Post/RecentPosts.jsx'
import Content from '../containers/Post/Content.jsx'

export default class Blog extends Component{
  render(){
    return(
        <Container className="searchContainer">
                <Row>
                  <Col lg="9">
                  <Content/>
                  </Col>
                    <Col lg="3">
                      <Search/>
                      <Caregories/>
                      <RecentPosts/>
                    </Col>
                </Row>
        </Container>
    );
  }
}