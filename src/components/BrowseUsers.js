import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import {Button , Table} from 'react-bootstrap';
import '../App.css';
const headers = {
    'Accept': 'application/json'
};


var searchUserHistoryUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/user/movieHistorys/';

var searchUserUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/userDetails/';

var getTopUsersUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/user/topTenUser/';

class BrowseUsers extends Component {

    constructor(props){

        super(props);
 
        this.state = {
    
          user: {},
          userMovieHistory:[],
          topUsers:[],
          topUserMode : ""

        };


        this.searchedUser = {

            "email" : ""

        } ;

    
      }


    handleSearchUser(){

        console.log("Searched User ",this.searchedUser.email )

        searchUserUrl = searchUserUrl + this.searchedUser.email;

        fetch(`${searchUserUrl}`, {
            method: 'GET',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(res => {

            console.log("res",res)
            if(res){
                console.log("User Search Successful!!")
                this.setState({user: res})

              }
            else{
                console.log("Search User Error!!")
              }
            }).catch(err => {
                console.log("Search User server error!!!");
                return err;
                });


        searchUserUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/userDetails/';

        this.setState({userMovieHistory:[]})


    }

    viewUserHistory(i){

        console.log("Viewing history for user ",this.searchedUser.email)

        searchUserHistoryUrl = searchUserHistoryUrl + this.searchedUser.email;

        fetch(`${searchUserHistoryUrl}`, {
            method: 'GET',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json'}
        }).then(res => res.json())
            .then(res => {
            console.log("res ",res)
            if(res){
                console.log("User Search History Successful!!")
                this.setState({userMovieHistory:res})
              }
            else{
                console.log("Search User History  Error!!")
              }
            }).catch(err => {
                console.log("Search User History server error!!!");
                return err;
                });

                searchUserHistoryUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/user/movieHistorys/';


    }

    handleGetTopUsersDaily(){

        this.state.topUserMode = "day"

        console.log("Get top users ", this.state.topUserMode)

        getTopUsersUrl = getTopUsersUrl + this.state.topUserMode;
        
                fetch(`${getTopUsersUrl}`, {
                    method: 'GET',
                    credentials:'include',
                    mode: 'cors',
                    headers: { ...headers,'Content-Type': 'application/json'}
                }).then(res => res.json())
                .then(res => {
                    if(res){
                        console.log("Top User Search Successful!!")
                        this.setState({topUsers:res})
        
                      }
                    else{
                        console.log("Daily Top User Search  Error!!")
                      }
                    }).catch(err => {
                        console.log("Daily Top User Search server error!!!");
                        return err;
                        });


        getTopUsersUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/user/topTenUser/';


    }

    handleTopUsersWeekly(){

        this.state.topUserMode = "week"

        console.log("Get top users ", this.state.topUserMode)

        console.log("Get top users ", this.state.topUserMode)

        getTopUsersUrl = getTopUsersUrl + this.state.topUserMode;
        
                fetch(`${getTopUsersUrl}`, {
                    method: 'GET',
                    credentials:'include',
                    mode: 'cors',
                    headers: { ...headers,'Content-Type': 'application/json'}
                }).then(res => res.json())
                .then(res => {
                    if(res){
                        console.log("Top User Search Successful!!")
                        this.setState({topUsers:res})
        
                      }
                    else{
                        console.log("Daily Top User Search  Error!!")
                      }
                    }).catch(err => {
                        console.log("Daily Top User Search server error!!!");
                        return err;
                        });


        getTopUsersUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/user/topTenUser/';

        
    }

    handleTopUsersMonthly(){

        this.state.topUserMode = "month"

        console.log("Get top users ", this.state.topUserMode)

        getTopUsersUrl = getTopUsersUrl + this.state.topUserMode;
        
                fetch(`${getTopUsersUrl}`, {
                    method: 'GET',
                    credentials:'include',
                    mode: 'cors',
                    headers: { ...headers,'Content-Type': 'application/json'}
                }).then(res => res.json())
                .then(res => {
                    if(res){
                        console.log("Top User Search Successful!!")
                        this.setState({topUsers:res})
        
                      }
                    else{
                        console.log("Daily Top User Search  Error!!")
                      }
                    }).catch(err => {
                        console.log("Daily Top User Search server error!!!");
                        return err;
                        });


        getTopUsersUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/user/topTenUser/';
        
        
    }

      

    render() {

        let userMovieHistory = this.state.userMovieHistory.map((userMovieHist, i)=>{
            return(

                <tr key={i}>
     
                <td>{userMovieHist.moviename}</td>
      
              </tr>
      
        )});

        let topUsers = this.state.topUsers.map((topUser, i)=>{
            return(

                <tr key={i}>
     
                <td>{topUser.User}</td>
      
              </tr>
      
        )});

      return (

        <div>

            <div>
                <AdminHeader/>
            </div>

                    
                    
                    
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">

            <br/>
            <br/>

            
            <br/><br/>

             <h1 className="text-muted">Search User</h1>
            <br></br>

            <form id="search-user-form">
                      
                      <input name="keyword" placeholder ="Enter username" required = {true} onChange= {(e)=>{this.searchedUser.email=e.target.value}}/>  
                      <br /><br />
                      <Button bsStyle="primary" onClick={()=> {this.handleSearchUser()}}>
                        Search
                      </Button>

                      <br /><br />
              
            </form>



            <div>
                <Table striped bordered condensed hover responsive>
                <thead className="thead-dark">
                    <tr>
                    <th>Full Name</th>
                    <th>User Name</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>View History</th>
                    </tr>
                </thead>
                <tbody>
                {/* {users} */}

                <td>{this.state.user.name}</td>

                <td>{this.state.user.email}</td>

                <td>{this.state.user.contactNo}</td>

                <td>{this.state.user.city}</td>

                <td><Button bsStyle="primary" onClick={()=>{this.viewUserHistory()}}>View</Button></td>

                </tbody>
                </Table>
            </div>

            <br/><br/>

            <div>
                <Table striped bordered condensed hover responsive>
                <thead>
                    <tr>
                    <th>History</th>
                    </tr>
                </thead>
                <tbody>
                {userMovieHistory}
                </tbody>
                </Table>
            </div>

            <br/><br/>

            <div>

                <div>
                    <h1 className="text-muted">Top users</h1>
                </div>

                    <Button bsStyle="primary" onClick={()=> {this.handleGetTopUsersDaily()}}>
                        Daily
                    </Button>

                    <Button bsStyle="primary" style={{marginLeft:15}} onClick={()=> {this.handleTopUsersWeekly()}}>
                        Weekly
                    </Button>

                    <Button bsStyle="primary" style={{marginLeft:15}} onClick={()=> {this.handleTopUsersMonthly()}}>
                        Monthly
                    </Button>

                    <br /><br />

            </div>


            <div>
                <Table striped bordered condensed hover responsive>
                <thead className="thead-dark">
                    <tr>
                    <th>Top Users</th>
                    </tr>
                </thead>
                <tbody>
                {topUsers}
                </tbody>
                </Table>
            </div>

            <br/><br/>




          </div>
          <div className="col-sm-1"></div>
        </div>

    </div>

      );
    }
  }
  
  export default BrowseUsers;