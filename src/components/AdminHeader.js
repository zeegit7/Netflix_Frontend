import React, { Component } from 'react';
import '../App.css';
import {history} from '../utils/utils';
import firebase from "firebase";

const headers = {
  'Accept': 'application/json'
};

const logoutUrl = 'http://localhost:8080/user/logout';



class AdminHeader extends Component {

  constructor(){

    super();
  
    this.handlefacebookLogout = this.handlefacebookLogout.bind(this);
  
  }

  handlefacebookLogout(){
    console.log("logout attempted")
    firebase.auth().signOut();
    this.handleLogout();
  }

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
                <a className="navbar-brand" href="https://netflix-cmpe275.herokuapp.com/" style={{color:"white", float: "left"}}>Movie-Central</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{float: "right"}}>
                  <ul className="navbar-nav mr-auto pull-right">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="https://netflix-cmpe275.herokuapp.com/login" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"white"}}>
                        Browse
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="https://netflix-cmpe275.herokuapp.com/browseMoviesAdmin">Movies</a>
                        <a className="dropdown-item" href="https://netflix-cmpe275.herokuapp.com/browseUsers">Users</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="https://netflix-cmpe275.herokuapp.com/financials">Financials</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick = {this.handlefacebookLogout} style={{color:"white"}}>Logout</a>
                    </li>
                  </ul>

                </div>
              </nav>
        </div>
        
      );
    }
  }
  
  export default AdminHeader;