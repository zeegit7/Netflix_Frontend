import React, { Component } from 'react';
import '../App.css';
import {history} from '../utils/utils';

const headers = {
  'Accept': 'application/json'
};

const logoutUrl = 'http://localhost:8080/user/logout';



class UserHeader extends Component {

  handleLogout(){

    console.log("logout attempted")

    fetch(`${logoutUrl}`, {
      method: 'GET',
      credentials:'include',
      mode: 'cors',
      headers: { ...headers,'Content-Type': 'application/json' }
  }).then(res => res.json())
  .then(res => {
    console.log("res",res)
      if(res){
        console.log("logout Success!!")
        history.push("/")
          
        }
      else{
          console.log("logout error!!")
          
        }
      }).catch(err => {
          console.log("Server error logout");
          return err;
          });


  }

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
                        <a className="dropdown-item" href="http://localhost:3000/userMovies">Your Movies</a>
                        <a className="dropdown-item" href="http://localhost:3000/browseMoviesUser">Top Movies</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="http://localhost:3000/subscription">Subscription</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={this.handleLogout} style={{color:"white"}}>Logout</a>
                    </li>
                  </ul>

                </div>
              </nav>
        </div>
        
      );
    }
  }
  
  export default UserHeader;