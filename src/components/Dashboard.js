import React, { Component } from 'react';
import DashboardHeader from './DashboardHeader';
import Footer from './Footer';
import '../App.css';


import {Jumbotron} from 'react-bootstrap';

import '../App.css';


class Dashboard extends Component {

  render() {

    return (
      <div>

            <div>
              <DashboardHeader/>
            </div>

            <br>
            </br>

            <br>
            </br>

            <div className="container">
            
              <Jumbotron>

                <h1>Welcome to Movie Central!</h1>


              </Jumbotron>
            
            
            
            </div>



            <div>
              <Footer/>
            </div>

          
          
      </div>
    );
  }
}

export default Dashboard;