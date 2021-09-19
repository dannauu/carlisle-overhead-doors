import React from "react";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";

const Navigation = () => {
  return (
    <Router>
      <div className="sidebar">
        <Link className="active" to="/">
          <i className="fas fa-home"></i> Home
        </Link>
        <Link className="active" to="/About">
          <i className="fas fa-info-circle"></i> About
        </Link>
        <Link className="active" to="/Gallery">
          <i className="far fa-images"></i> Gallery
        </Link>
        <Link className="active" to="/Contact">
          <i className="far fa-address-book"></i> Contact
        </Link>

        <div className="contact">
          <div className="row">
            <div className="col-md-12">
              <a
                href="https://www.facebook.com/Carlisleoverheaddoors/"
                className="btn btn-social"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-square fa-7x facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Gallery" component={Gallery} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default Navigation;
