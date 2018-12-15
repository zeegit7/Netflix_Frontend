import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import {Button , Table} from 'react-bootstrap';
import '../App.css';

const headers = {
    'Accept': 'application/json'
  };

var getTopMoviesUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/user/topTenMovies/';
var searchMoviePlaysUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/user/';

class BrowseMoviesAdmin extends Component {

    constructor(props){

        super(props);
 
        this.state = {
    
          moviePlays: {},
          topMovies:[],
          topMoviesMode : "",
          errors : [],
          showErrorMessages:false,
          messageType : "alert alert-light",

        };


        this.searchedMovie = {
            "title" : "",
            "period": ""

        } ;

    
      }


      handleSearchMoviePlaysDaily(){

        this.state.errors = [];

        this.setState({messageType:"alert alert-light"})

        if(!this.searchedMovie.title){
              this.state.errors.push("Enter movie name!");
          }
    
          if(this.state.errors.length>0){
            this.setState({messageType:"alert alert-danger"})
            return
          }

        this.searchedMovie.period = "day"

        console.log("Searched Movie",this.searchedMovie.title, " ",this.searchedMovie.period   )

        searchMoviePlaysUrl = searchMoviePlaysUrl + this.searchedMovie.title + '/' + this.searchedMovie.period

        fetch(`${searchMoviePlaysUrl}`, {
            method: 'GET',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(res => {

            console.log("res",res);
            if(res){

                console.log("Movie plays Search Successful!!")
                
                this.setState({moviePlays: res})

              }
            else{
                console.log("Movie plays search Error!!")
              }
            }).catch(err => {
                console.log("Movie plays search server error!!!");
                return err;
                });


                searchMoviePlaysUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/user/';

    } 


    handleSearchMoviePlaysWeekly(){

        this.state.errors = [];

        this.setState({messageType:"alert alert-light"})

        if(!this.searchedMovie.title){
            this.state.errors.push("Enter movie name!");
        }
  
        if(this.state.errors.length>0){
          this.setState({messageType:"alert alert-danger"})
          return
        }


        this.searchedMovie.period = "week"

        console.log("Searched Movie",this.searchedMovie.title, " ",this.searchedMovie.period   )

        searchMoviePlaysUrl = searchMoviePlaysUrl + this.searchedMovie.title + '/' + this.searchedMovie.period

        fetch(`${searchMoviePlaysUrl}`, {
            method: 'GET',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(res => {

            console.log("res",res);
            if(res){

                console.log("Movie plays Search Successful!!")
                this.setState({moviePlays: res})

              }
            else{
                console.log("Movie plays search Error!!")
              }
            }).catch(err => {
                console.log("Movie plays search server error!!!");
                return err;
                });


                searchMoviePlaysUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/user/';


    } 


    handleSearchMoviePlaysMonthly(){

        this.state.errors = [];

        this.setState({messageType:"alert alert-light"})

        if(!this.searchedMovie.title){
            this.state.errors.push("Enter movie name!");
        }
  
        if(this.state.errors.length>0){
          this.setState({messageType:"alert alert-danger"})
          return
        }


        this.searchedMovie.period = "month"

        console.log("Searched Movie",this.searchedMovie.title, " ",this.searchedMovie.period   )

        searchMoviePlaysUrl = searchMoviePlaysUrl + this.searchedMovie.title + '/' + this.searchedMovie.period

        fetch(`${searchMoviePlaysUrl}`, {
            method: 'GET',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(res => {

            console.log("res",res);
            if(res){

                console.log("Movie plays Search Successful!!")
                this.setState({moviePlays: res})

              }
            else{
                console.log("Movie plays search Error!!")
              }
            }).catch(err => {
                console.log("Movie plays search server error!!!");
                return err;
                });


                searchMoviePlaysUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/user/';

    } 





    handleGetTopMoviesDaily(){

        this.state.topMoviesMode = "day"

        getTopMoviesUrl = getTopMoviesUrl + this.state.topMoviesMode;

        console.log("Get top movies ", this.state.topMoviesMode)

        
                fetch(`${getTopMoviesUrl}`, {
                    method: 'GET',
                    credentials:'include',
                    mode: 'cors',
                    headers: { ...headers,'Content-Type': 'application/json'}
                }).then(res => res.json())
                .then(res => {
                    if(res){
                        console.log("Top movies Search Successful!!")
                        this.setState({topMovies: res})
                      }
                    else{
                        console.log("Top movies Search  Error!!")
                      }
                    }).catch(err => {
                        console.log("Top movies Search server error!!!");
                        return err;
                        });


            getTopMoviesUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/user/topTenMovies/';

            this.setState({moviePlays:{}})


    }

    handleTopMoviesWeekly(){

        this.state.topMoviesMode = "week"

        getTopMoviesUrl = getTopMoviesUrl + this.state.topMoviesMode;

        console.log("Get top movies ", this.state.topMoviesMode)

        fetch(`${getTopMoviesUrl}`, {
            method: 'GET',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(res => {
            if(res){
                console.log("Top movies Search Successful!!")
                this.setState({topMovies: res})
              }
            else{
                console.log("Top movies Search  Error!!")
              }
            }).catch(err => {
                console.log("Top movies Search server error!!!");
                return err;
                });


                getTopMoviesUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/user/topTenMovies/';



        
    }

    handleTopMoviesMonthly(){

        this.state.topMoviesMode = "month";

        getTopMoviesUrl = getTopMoviesUrl + this.state.topMoviesMode;

        console.log("Get top movies ", this.state.topMoviesMode)

        fetch(`${getTopMoviesUrl}`, {
            method: 'GET',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(res => {
            if(res){
                console.log("Top movies Search Successful!!")
                this.setState({topMovies: res})
              }
            else{
                console.log("Top movies Search  Error!!")
              }
            }).catch(err => {
                console.log("Top movies Search server error!!!");
                return err;
                });



                getTopMoviesUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/user/topTenMovies/';



        
    }

      

    render() {

        let errors = this.state.errors.map((error, i)=>{
            return(
    
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
    
        )});

        var topMovies = this.state.topMovies.map((topMovie, i)=>{
            return(

                <tr key={i}>
     
                <td>{topMovie.moviename}</td>

              </tr>
      
        )});

      return (

        <div>

            <div>
                <AdminHeader/>
            </div>

            <br/><br/>

        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">

            <div className={this.state.messageType}>

            {errors}

            </div>

            <br/>
            <br/>

             <h1 className="text-muted">Search Movie</h1>
            <br></br>

            <form id="search-movie-form">
                      
                      <input name="keyword" placeholder ="Enter title" required = {true} onChange= {(e)=>{this.searchedMovie.title=e.target.value}}/>  
                      <br /><br />
                      <Button bsStyle="primary" onClick={()=> {this.handleSearchMoviePlaysDaily()}}>
                        Daily plays!
                      </Button>
                      <Button bsStyle="primary" style={{marginLeft:15}} onClick={()=> {this.handleSearchMoviePlaysWeekly()}}>
                        Weekly plays!
                      </Button>
                      <Button bsStyle="primary" style={{marginLeft:15}} onClick={()=> {this.handleSearchMoviePlaysMonthly()}}>
                        Monthly plays!
                      </Button>

                      <br /><br />
              
            </form>



            <div>
                <Table striped bordered condensed hover responsive>
                <thead className="thead-dark">
                    <tr>
                    <th>Plays</th>
                    </tr>
                </thead>
                <tbody>
                <h3>{this.state.moviePlays.NoOfPlay}</h3>
                </tbody>
                </Table>
            </div>

            <br/><br/>

            <div>

                <div>
                    <h1 className="text-muted">Top Movies</h1>
                </div>

                    <Button bsStyle="primary" style={{width:85}} onClick={()=> {this.handleGetTopMoviesDaily()}}>
                        Daily
                    </Button>

                    <Button bsStyle="primary" style={{marginLeft:15,width:85}} onClick={()=> {this.handleTopMoviesWeekly()}}>
                        Weekly
                    </Button>

                    <Button bsStyle="primary" style={{marginLeft:15,width:85}} onClick={()=> {this.handleTopMoviesMonthly()}}>
                        Monthly
                    </Button>

                    <br /><br />

            </div>


            <div>
                <Table striped bordered condensed hover responsive>
                <thead className="thead-dark">
                    <tr>
                    <th>Top Movies</th>
                    </tr>
                </thead>
                <tbody>
                {topMovies}
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
  
  export default BrowseMoviesAdmin;