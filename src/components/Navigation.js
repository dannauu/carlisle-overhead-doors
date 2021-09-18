import React from 'react'
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Home from './Home'
import About from './About'
import Gallery from './Gallery'
import Contact from './Contact'

const Navigation = () => {
    return (
        <Router>
            <div className="sidebar">
                <Link className="active" to='/'> Home <i className="fas fa-home"></i></Link>
                <Link className="active" to='/About'> About <i className="fas fa-info-circle"></i></Link>
                <Link className="active" to='/Gallery'> Gallery <i className="far fa-images"></i></Link>
                <Link className="active" to='/Contact'> Contact <i className="far fa-address-book"></i></Link>
            </div>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Gallery" component={Gallery} />
            <Route path="/Contact" component={Contact} />
        </Switch>
        </ Router>
    )
}

export default Navigation
