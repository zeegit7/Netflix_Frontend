import React, { Component } from 'react';
import '../App.css';



class DashboardHeader extends Component {

    render() {
      return (
  
        <div>
              <nav className="navbar navbar-expand-lg navbar-light" style={{display: "inline-block", width: "100%", height: 100, padding: 20,fontSize: 20}}>
                <a className="navbar-brand" href="https://netflix-cmpe275.herokuapp.com/" style={{color:"white", float: "left"}}>Movie-Central</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{float: "right"}}>
                  <ul className="navbar-nav mr-auto pull-right">
                    <li className="nav-item active">
                      <a className="nav-link" href="https://netflix-cmpe275.herokuapp.com/register" style={{color:"white"}}>Register <span className="sr-only" style={{color:"white"}}>(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://netflix-cmpe275.herokuapp.com/login" style={{color:"white"}}>Login</a>
                    </li>
                  </ul>
                </div>
              </nav>
        </div>
        
      );
    }
  }
  
  export default DashboardHeader;