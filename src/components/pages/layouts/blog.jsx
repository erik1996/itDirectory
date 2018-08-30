import React,{Component} from "react"
import BlogContent from '../containers/blog/blogcontent'
import {Container} from 'reactstrap';

export default class Blog extends Component{
    render(){
        return (
            <Container>
                <BlogContent/>
            </Container>
        )
    }
}