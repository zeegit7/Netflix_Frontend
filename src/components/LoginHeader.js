import React, { Component } from 'react';
import '../App.css';



class LoginHeader extends Component {

    render() {
      return (
  
        <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{display: "inline-block", width: "100%"}}>
                <a className="navbar-brand" href="http://localhost:3000/" style={{color:"white", float: "left"}}>SJSU-Netflix</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{float: "right"}}>
                  <ul className="navbar-nav mr-auto pull-right">
                    <li className="nav-item active">
                      <a className="nav-link" href="http://localhost:3000/register" style={{color:"white"}}>Register <span className="sr-only" style={{color:"white"}}>(current)</span></a>
                    </li>
                  </ul>
                </div>
              </nav>
        </div>
        
      );
    }
  }
  
  export default LoginHeader;