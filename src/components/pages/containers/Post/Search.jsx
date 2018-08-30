import React,{Component} from "react"

export default class Search extends Component{
  render() {
    return(
      <div className="search-container">
        <input placeholder="Search Keywords" className="post-search" type="text"/>
        <i className="fa fa-search post-search-icon" aria-hidden="true"></i>
      </div>
    );
  }
}