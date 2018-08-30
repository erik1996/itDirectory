import React,{Component} from "react"

export default class Search extends Component{
  render() {
    return(
      <div className="post-categories-container">
        <h4 className="post-categories-title">Categories</h4>
        <ul className="post-categories-list">
          <li><a href="">Python</a></li>
          <li><a href="">Java Script</a></li>
          <li><a href="">PHP</a></li>
          <li><a href="">Java</a></li>
          <li><a href="">Swift</a></li>
        </ul>
        
      </div>
    );
  }
}