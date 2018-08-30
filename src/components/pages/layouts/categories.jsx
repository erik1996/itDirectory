import React,{Component} from "react"
import Search from "../../static/pages/search.jsx"
import CategoryListing from "../containers/category/categorylisting.jsx"


export default class Categories extends Component{

    render(){
        return (
            <Search childComponent={<CategoryListing/>} />
        )
    }
}