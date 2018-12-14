import React, { Component } from 'react';
import '../App.css';



class LoginHeader extends Component {

    render() {
      return (
  
        <div>
              <nav className="navbar navbar-expand-lg navbar-light" style={{display: "inline-block", width: "100%",height: 80, backgroundColor: 'black', opacity: '0.7',paddingTop: 18, fontSize: 20, fontWeight: 500}}>
                <a className="navbar-brand" href="https://netflix-cmpe275.herokuapp.com/" style={{color:"red", float: "left",fontSize: 20, fontWeight: 700}}>Movie-Central</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{float: "right"}}>
                  <ul className="navbar-nav mr-auto pull-right">
                    <li className="nav-item active">
                      <a className="nav-link" href="https://netflix-cmpe275.herokuapp.com/register" style={{color:"red"}}>Register</a>
                    </li>
                  </ul>
                </div>
              </nav>
        </div>
        
      );
    }
  }
  
  export default LoginHeader;