import React, { Component } from 'react';
import DashboardHeader from './DashboardHeader';
import Footer from './Footer';
import '../App.css';


class Dashboard extends Component {

  render() {

    return (
    <div className="mainBody">

            <div>
              <DashboardHeader/>
            </div>
      
      </div>
    );
  }
}

export default Dashboard;
