import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Navbar } from "react-bootstrap";
import logo from "../../logo.svg";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to the React.JS & ReactNative Berlin Meetup at Lidl Digital
          </h1>
        </header>
        <div className="App-intro">
          <Navbar>
            <Grid>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">Home</Link>
                </Navbar.Brand>
                <Navbar.Brand>
                  <Link to="/speakers">Speakers</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
            </Grid>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Header;
