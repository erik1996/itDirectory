import React,{Component} from "react"
import Search from "../../static/pages/search.jsx"
import JobListing from "../containers/company/joblisting.jsx"


export default class Companies extends Component{

    render(){
        return (
            <Search childComponent={<JobListing/>} />
        )
    }
}