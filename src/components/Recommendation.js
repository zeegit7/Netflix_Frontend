import React, { Component } from 'react';
import UserHeader from './UserHeader';
import Footer from './Footer';
import {Table} from 'react-bootstrap';
import '../App.css';

const headers = {
    'Accept': 'application/json'
};


const getRecommendationsUrl = 'http://localhost:8080/movies/recommendation';


class Recommendation extends Component {

    constructor(props){

        super(props);
 
        this.state = {
    
          recommendedMovies: [],
          errors : [],
          messageType : "alert alert-light" 

        };


    
      }



    getRecommendedMovies(){

        console.log("getRecommendedMovies");

                fetch(`${getRecommendationsUrl}`, {
                    method: 'GET',
                    credentials:'include',
                    mode: 'cors',
                    headers: { ...headers,'Content-Type': 'application/json'}
                }).then(res => res.json())
                .then(res => {
                    console.log("res=",res)
                    if(res){
    
                        console.log("getRecommendedMovies Successful!!")
                        this.setState({recommendedMovies: res})
                        console.log("rec mov",this.state.recommendedMovies)
        
                      }
                    else{
                        console.log("getRecommendedMovies  Error!!")
                      }
                    }).catch(err => {
                        console.log("getRecommendedMovies server error!!!");
                        this.state.errors.push("Please search movies before viewing recommendations!")
                        this.setState({messageType:"alert-alert-danger"})
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
     
                <td>{recommendedMovie.Movie}</td>

              </tr>
      
        )});

        let recommendedMoviesKeyword = this.state.recommendedMovies.map((recommendedMovie, i)=>{
            return(

                <tr key={i}>
     
                <td>{recommendedMovie.keyword}</td>

              </tr>
      
        )});

        let errors = this.state.errors.map((error, i)=>{
            return(
    
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
    
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
                <br></br>

                </div>

                <div className = "container">

                    <div className={this.state.messageType}>

                        {errors}

                    </div>

                </div>


                <div>
                <Table striped bordered condensed hover responsive>
                <thead className="thead-dark">
                    <tr>
                    <th><h4>Recommended based on your recent search </h4> <p style={{float:'center',marginLeft:450,marginTop:20}}>{recommendedMoviesKeyword[0]}</p></th>
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