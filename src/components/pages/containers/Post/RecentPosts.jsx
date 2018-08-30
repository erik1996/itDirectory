import React,{Component} from "react"
import {Row, Col} from "reactstrap"

export default class RecentPosts extends Component{
  render() {
    return(
        <div className='recent-posts-container'>
          <h4 className='recent-posts-title'>Recent Posts</h4>
          <ul className='recent-posts-list'>
            <li className="recent-post">
              <Row>
                <Col lg="4"  md="4" sm="4" >
                  <img src={require('../../../../img/post/Layer40.png')} alt=""/>
                </Col>
                <Col lg="8"  md="8" sm="8" className='recent-post-title'>
                  <h5>Canada adds 12,500 jobs in modest July rebound</h5>
                  <span>October 25, 2017</span>
                </Col>
              </Row>
            </li>
             <li className="recent-post">
              <Row>
                <Col lg="4"  md="4" sm="4" >
                  <img src={require('../../../../img/post/Layer40.png')} alt=""/>
                </Col>
                <Col lg="8"  md="8" sm="8" className='recent-post-title'>
                  <h5>Canada adds 12,500 jobs in modest July rebound</h5>
                  <span>October 25, 2017</span>
                </Col>
              </Row>
            </li>
             <li className="recent-post">
              <Row>
                <Col lg="4"  md="4" sm="4" >
                  <img src={require('../../../../img/post/Layer40.png')} alt=""/>
                </Col>
                <Col lg="8"  md="8" sm="8" className='recent-post-title'>
                  <h5>Canada adds 12,500 jobs in modest July rebound</h5>
                  <span>October 25, 2017</span>
                </Col>
              </Row>
            </li>
          </ul>
        </div>
    )
  }
}