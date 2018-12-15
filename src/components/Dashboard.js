import React, { Component } from 'react';
import DashboardHeader from './DashboardHeader';
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
