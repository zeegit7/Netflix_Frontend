import React, { Component } from 'react';
import '../App.css';

//navbar fixed-bottom navbar-light bg-dark


class FooterMainpage extends Component {

  render() {
    return (
      <div>


                      <nav className="navbar-light bg-dark" style={{display: "inline-block", width: "100%"}}>
                          <a className="navbar-brand" href="https://netflix-cmpe275.herokuapp.com/"style={{color:"white", float: "left"}}>SJSU-Netflix</a>
      
                        </nav>

 
          
      </div>
    );
  }
}

export default FooterMainpage;
