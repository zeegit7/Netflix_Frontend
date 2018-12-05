import React, { Component } from 'react';
import '../App.css';



class UserHeader extends Component {

    render() {
      return (
  
        <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{display: "inline-block", width: "100%"}}>
                <a className="navbar-brand" href="http://localhost:3000/" style={{color:"white", float: "left"}}>SJSU-Netflix</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{float: "right"}}>
                  <ul className="navbar-nav mr-auto pull-right">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"white"}}>
                        Browse
                      </a> 
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="http://localhost:3000/browseMoviesUser">Movies</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="http://localhost:3000/subscription">Subscription</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="http://localhost:3000/" style={{color:"white"}}>Logout</a>
                    </li>
                  </ul>

                </div>
              </nav>
        </div>
        
      );
    }
  }
  
  export default UserHeader;