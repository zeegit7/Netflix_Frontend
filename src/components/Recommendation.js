import React, { Component } from 'react';
import UserHeader from './UserHeader';
import Footer from './Footer';
import {Table} from 'react-bootstrap';
import '../App.css';

const headers = {
    'Accept': 'application/json'
};


const getRecommendationsUrl = 'http://localhost:8080/user/topTenMovies/month';


class Recommendation extends Component {

    constructor(props){

        super(props);
 
        this.state = {
    
          recommendedMovies: []

        };


    
      }



    getRecommendedMovies(){

        console.log("getRecommendedMovies")
        
                fetch(`${getRecommendationsUrl}`, {
                    method: 'GET',
                    credentials:'include',
                    mode: 'cors',
                    headers: { ...headers,'Content-Type': 'application/json'}
                }).then(res => res.json())
                .then(res => {
                    if(res){
    
                        console.log("getRecommendedMovies Successful!!")
                        this.setState({recommendedMovie: res})
        
                      }
                    else{
                        console.log("getRecommendedMovies  Error!!")
                      }
                    }).catch(err => {
                        console.log("getRecommendedMovies server error!!!");
                        return err;
                        });

    }


    componentWillMount(){

        this.getRecommendedMovies();

    }


    render() {

        let recommendedMovies = this.state.recommendedMovies.map((recommendedMovie, i)=>{
            return(

                <tr key={i}>
     
                <td>{recommendedMovie.moviename}</td>

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
                    <h1 className ="text-muted">Your Recommended Movies!</h1>
                </div>

                <br></br>

                </div>


                <div>
                <Table striped bordered condensed hover responsive>
                <thead>
                    <tr>
                    <th>Recommended Movies</th>
                    </tr>
                </thead>
                <tbody>
                {recommendedMovies}
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
  
  export default Recommendation;