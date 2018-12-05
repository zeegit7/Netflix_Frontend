import React, { Component } from 'react';
import '../App.css';

//navbar fixed-bottom navbar-light bg-dark


class Footer extends Component {

  render() {
    return (
      <div>


                      <nav className="navbar fixed-bottom  navbar-light bg-dark" style={{display: "inline-block", width: "100%"}}>
                          <a className="navbar-brand" href="http://localhost:3000/"style={{color:"white", float: "left"}}>SJSU-Netflix</a>
      
                        </nav>

 
          
      </div>
    );
  }
}

export default Footer;
