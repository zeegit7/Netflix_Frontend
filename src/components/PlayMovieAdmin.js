import React, { Component } from 'react';
import '../App.css';
import AdminHeader from './AdminHeader';
import Footer from './Footer';
import {Jumbotron } from 'react-bootstrap';
import '../App.css';

const headers = {
  'Accept': 'application/json'
};


class PlayMovieAdmin extends Component {

    constructor(props){

        super(props);

        this.movieReview = {

          title : this.props.playMovieData.title

        }
        
      }

    
  render() {
    return (
      <div>

            <div>
              <AdminHeader/>
            </div>

          <div className="container">

          <div>

                  <h1>PLAYING NOW:</h1>

                  </div>


                  <Jumbotron>

                      <div>

                          <h1>{this.props.playMovieData.title}</h1>

                      </div>

                      <h1>{this.props.playMovieData.genre}</h1>

                      <h1>{this.props.playMovieData.year}</h1>

                      <h1>{this.props.playMovieData.studio}</h1>

                      <h1>{this.props.playMovieData.director}</h1>

                      <h1>{this.props.playMovieData.actors}</h1>

                      <h1>{this.props.playMovieData.rating}</h1>


                  </Jumbotron>

                  <br></br>



          </div>

          

            <div>
              <Footer/>
            </div>

      </div>
    );
  }
}

export default PlayMovieAdmin;
