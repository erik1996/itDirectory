import React,{Component} from "react"
import TopCompanies from "../containers/home/topcompanies";
import TopCategories from "../containers/home/topcategories";
import HotCompany from "../containers/home/hotcompanies";
import NewsFeed from "../containers/home/newsfeed";

export default class Home extends Component{


    render(){

        return (<div id="home">
            <TopCompanies/>
            <TopCategories/>
            <HotCompany/>
            <NewsFeed/>
        </div>)
    }
}