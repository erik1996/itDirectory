import React from 'react'
import {Route, IndexRedirect} from 'react-router'


import Layout from '../layout.jsx'
import Home from '../components/pages/layouts/home.jsx'
import Companies from '../components/pages/layouts/companies.jsx'
import Company from '../components/pages/layouts/company.jsx'
import Categories from "../components/pages/layouts/categories";
import Blog from '../components/pages/layouts/blog.jsx'
import Contact from '../components/pages/layouts/contact.jsx'
import Login from '../components/pages/layouts/login.jsx'
import SignUp from '../components/pages/layouts/signup.jsx'
import Post from '../components/pages/layouts/post.jsx'

export default (
    <Route path='/' component={Layout}>
        <IndexRedirect to="home"/>
        <Route path="home" component={Home}/>
        <Route path="companies" component={Companies}/>
        <Route path="categories" component={Categories}/>
        <Route path="company" component={Company}/>
        <Route path="blog" component={Blog}/>
        <Route path="contact" component={Contact}/>
        <Route path="signup" component={SignUp}/>
        <Route path="login" component={Login}/>
        <Route path="post" component={Post}/>
    </Route>



)
