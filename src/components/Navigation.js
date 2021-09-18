import React from 'react'
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Home from './Home'
import About from './About'
const Navigation = () => {
    return (
        <Router>
            <div className="sidebar">
                <Link className="active" to='/'>Home</Link>
                <Link className="active" to='/About'>About</Link>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
        </Switch>
        </ Router>
    )
}

export default Navigation
