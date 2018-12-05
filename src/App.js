import React, { Component } from 'react';
import {Route, Router, Switch } from 'react-router-dom';
import {history} from './utils/utils';
import './App.css';
import AdminMovies from './components/AdminMovies';
import UserMovies from './components/UserMovies';
import Login from './components/Login';
import Register from './components/Register';
import EditMovie from './components/EditMovie';
import PlayMovieUser from './components/PlayMovieUser';
import PlayMovieAdmin from './components/PlayMovieAdmin';
import Dashboard from './components/Dashboard';
import BrowseUsers from './components/BrowseUsers';
import BrowseMoviesAdmin from './components/BrowseMoviesAdmin';
import BrowseMoviesUser from './components/BrowseMoviesUser';
import Subscription from './components/Subscription';
import Financials from './components/Financials';
import Pay from './components/Pay';
import Error from './components/Error';



class App extends Component {

  constructor(props){

    super(props);

    this.state = {

      loggedIn:false,
      editMovieData:{},
      playMovieData:{}

    };

  }


  handleMovieEdit(editData){

  console.log("Edit data" ,editData);
  this.state.editMovieData = editData;
  history.push("/editMovie");

  }

  handleMoviePlayUser(playData){

    console.log("User Play data" ,playData);
    this.state.playMovieData = playData;
    history.push("/playMovieUser");
  
    }

    handleMoviePlayAdmin(playData){

      console.log("Admin Play data" ,playData);
      this.state.playMovieData = playData;
      history.push("/playMovieAdmin");
    
      }


  render() {

    return (
      <Router history={history}>

      <div className="App">

        <Switch>

        <Route  exact path="/adminMovies" component ={() => (<AdminMovies handleMovieEdit={this.handleMovieEdit.bind(this)} handleMoviePlay={this.handleMoviePlayAdmin.bind(this)}/>)}/>
        <Route  exact path="/userMovies" component ={() => (<UserMovies handleMoviePlay={this.handleMoviePlayUser.bind(this)}/>)}/>
        <Route  exact path="/login" component ={() => (<Login/>)}/>
        <Route  exact path="/" component ={() => (<Dashboard/>)}/>
        <Route  exact path="/register" component ={() => (<Register/>)}/> 
        <Route  exact path="/editMovie" component ={() => (<EditMovie editMovieData={this.state.editMovieData}/>)}/> 
        <Route  exact path="/playMovieUser" component ={() => (<PlayMovieUser playMovieData={this.state.playMovieData}/>)}/> 
        <Route  exact path="/playMovieAdmin" component ={() => (<PlayMovieAdmin playMovieData={this.state.playMovieData}/>)}/> 
        <Route  exact path="/browseUsers" component ={() => (<BrowseUsers/>)}/> 
        <Route  exact path="/browseMoviesAdmin" component ={() => (<BrowseMoviesAdmin/>)}/>
        <Route  exact path="/browseMoviesUser" component ={() => (<BrowseMoviesUser/>)}/>  
        <Route  exact path="/subscription" component ={() => (<Subscription/>)}/> 
        <Route  exact path="/financials" component ={() => (<Financials/>)}/> 
        <Route  exact path="/pay" component ={() => (<Pay/>)}/> 
        <Route component={Error} />
        
        

        </Switch>

      </div>

      </Router>
    );
  }
}

export default App;
