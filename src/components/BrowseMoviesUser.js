import React, { Component } from 'react';
import UserHeader from './UserHeader';
import Footer from './Footer';
import {Button , Table} from 'react-bootstrap';
//import {history} from '../utils/utils';
import '../App.css';

const headers = {
    'Accept': 'application/json'
};


const getTopPlayedMoviesUrl = 'http://localhost:8080/user/topTenMovies/month';

const getTopRatedMoviesUrl = 'http://localhost:8080/user/topTenMovies/month';

class BrowseMoviesUser extends Component {

    constructor(props){

        super(props);
 
        this.state = {
    
          topMovies: []

        };


    
      }

      


      getTopPlayedMoviesCurrentMonth(){

        console.log("getTopPlayedMoviesCurrentMonth")
        
                fetch(`${getTopPlayedMoviesUrl}`, {
                    method: 'GET',
                    credentials:'include',
                    mode: 'cors',
                    headers: { ...headers,'Content-Type': 'application/json'}
                }).then(res => res.json())
                .then(res => {
                    if(res){
                        console.log("Top played movies Search Successful!!")
                        this.setState({topMovies: res})
                      }
                    else{
                        console.log("Top played movies Search  Error!!")
                      }
                    }).catch(err => {
                        console.log("Top  played movies Search server error!!!");
                        return err;
                        });
        


    }


    getTopRatedMoviesCurrentMonth(){

        console.log("getTopRatedMoviesCurrentMonth")
        
                fetch(`${getTopRatedMoviesUrl}`, {
                    method: 'GET',
                    credentials:'include',
                    mode: 'cors',
                    headers: { ...headers,'Content-Type': 'application/json'}
                }).then(res => res.json())
                .then(res => {
                    if(res){
    
                        console.log("Top rated movies Search Successful!!")
                        this.setState({topMovies: res})
        
                      }
                    else{
                        console.log("Top rated movies Search  Error!!")
                      }
                    }).catch(err => {
                        console.log("Top rated movies Search server error!!!");
                        return err;
                        });


    }

    render() {

        let topMovies = this.state.topMovies.map((topMovie, i)=>{
            return(

                <tr key={i}>
     
                <td>{topMovie.moviename}</td>

              </tr>
      
        )});

      return (

        <div>

            <div>
                <UserHeader/>
            </div>

            <br/><br/>

        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">

            <br/>
            <br/>

            <div>

                <div>
                    <h1 className ="text-muted">View Top Movies This Month!</h1>
                </div>

                <br></br>

                    <Button bsStyle="primary" onClick={()=> {this.getTopRatedMoviesCurrentMonth()}}>
                        Top-rated
                    </Button>

                    <Button bsStyle="primary" onClick={()=> {this.getTopPlayedMoviesCurrentMonth()}}>
                        Top-plays
                    </Button>

                    <br /><br />
                    <br></br>

                </div>


                <div>
                <Table striped bordered condensed hover responsive>
                <thead>
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

            

            <div>
                <Footer/>
            </div>
            
  
        </div>

      );
    }
  }
  
  export default BrowseMoviesUser;