import React, { Component } from 'react';
import '../App.css';
import UserHeader from './UserHeader';
import Footer from './Footer';
import {history} from '../utils/utils';
import {Label, Button, Jumbotron } from 'react-bootstrap';
import '../App.css';
const reviewUrl = 'http://localhost:8080/movies/insertReview';
const headers = {
  'Accept': 'application/json'
};
var getPaymentDueUrl = 'http://localhost:8080/movies/findPrice/';
var makePaymentUrl = '';
var playMovieUrl = 'http://localhost:8080/movies/play/';
var makePaymentUrl = 'http://localhost:8080/payPerView/payForPayPerView'



class PlayMovieUser extends Component {

    constructor(props){

        super(props);

        this.movieToPayFor = {

          title : this.props.playMovieData.title

        }

        this.movieReview = {

          title : this.props.playMovieData.title,
          review : "",
          reviewRating: ""

        };

        this.state={

          paymentDue : "",
          errors : [],
          showErrorMessages:false,
          messageType : "alert alert-light" 

        };

        
      }

      playMovie(){

        console.log("attempting to play movie ",this.props.playMovieData.title)

        playMovieUrl = playMovieUrl + this.movieReview.title;

        fetch(`${playMovieUrl}`, {
          method: 'GET',
          credentials:'include',
          mode: 'cors',
          headers: { ...headers,'Content-Type': 'application/json' }
      }).then(res => res.json())
      .then(res => {
        console.log("res ", res)
          if(res){
              console.log("play movie API successful!!")
            }
          else{
              console.log("play movie API error!!")
            }
          }).catch(err => {
              console.log("play movie API server error!!!");
              return err;
              });
              
              playMovieUrl = 'http://localhost:8080/movies/play/'
      }



      handleReview(){

        this.state.errors=[];

        this.movieReview.reviewRating = parseInt(this.movieReview.reviewRating);

        console.log("review ",this.movieReview)

        if(!this.movieReview.review || !this.movieReview.reviewRating){
          console.log("Enter both fields to review successfully!")
        this.state.errors.push("Enter both fields to review successfully!");
        this.setState({messageType:"alert alert-danger"})
        return
      }

        fetch(`${reviewUrl}`, {
            method: 'POST',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json' },
            body: JSON.stringify(this.movieReview)
        }).then(res => {
          console.log("res ", res)
            if(res.status === 200){
                console.log("Reviewed Successfully!!")
                this.state.errors.push("Reviewed successfully");
                this.setState({messageType:"alert alert-success"})
              }
            else{
                console.log("Review error!!")
              }
            }).catch(err => {
                console.log("Review server error!!!");
                return err;
                });


            document.getElementById("review-form").reset();

      }


      getPaymentDue(){

        console.log("getting due payment");

        getPaymentDueUrl = getPaymentDueUrl + this.movieReview.title;

        fetch(`${getPaymentDueUrl}`, {
          method: 'GET',
          credentials:'include',
          mode: 'cors',
          headers: { ...headers,'Content-Type': 'application/json' }
      }).then(res => res.json())
      .then(res => {
        console.log("res ", res)
          if(res.amount){
              console.log("getPaymentDue Successful!!")
              this.setState({paymentDue:res.amount})
              if(parseInt(res.amount)>0){

                console.log("Please pay due before movie starts!")
    
                this.state.errors.push("Please pay due before movie starts. Refer below legend for payment details!");
                this.setState({messageType:"alert alert-danger"})
    
              }
              else{

                this.state.errors.push("Your movie will start automatically in less that 10 seconds!");
                this.setState({messageType:"alert alert-success"})

              }
              
            }
          else{
              console.log("getPaymentDue error!!")
            }
          }).catch(err => {
              console.log("getPaymentDue server error!!!");
              return err;
              });

      getPaymentDueUrl = 'http://localhost:8080/movies/findPrice/';

      }

      componentWillMount(){

          this.getPaymentDue();

          this.playMovie();

      }




      makeMoviePayment(){

        console.log("makeMoviePayment")

        fetch(`${makePaymentUrl}`, {
          method: 'POST',
          credentials:'include',
          mode: 'cors',
          headers: { ...headers,'Content-Type': 'application/json' },
          body: JSON.stringify(this.movieToPayFor)
      }).then(res => {
        console.log("res ", res)
          if(res.status === 200){
              console.log("makeMoviePayment Successfully!!")
              history.push("/pay")
            }
          else{
              console.log("makeMoviePayment error!!")
            }
          }).catch(err => {
              console.log("makeMoviePayment server error!!!");
              return err;
              });


      }
    

  render() {

    let errors = this.state.errors.map((error, i)=>{
      return(

          <div className={this.state.messageType} role="alert">
              {error}
          </div>

  )});
    return (
      <div >

            <div>
              <UserHeader/>
            </div>


            <div className="container">

                        <div>

                        <h1>NOW:</h1>

                        <br></br>

                        </div>

                        <div>

                          <h3>Payment due for current movie = ${this.state.paymentDue}</h3>
                          <br></br>


                            <div className={this.state.messageType}>

                                {errors}

                            </div>

                          {/* <b>{this.messageToShow}</b><a href = 'http://localhost:3000/pay' onClick={()=> {this.makeMoviePayment()}}> <b>{this.secondaryMessageToShow}</b></a> */}
                          {/* <br></br>
                          <br></br> */}

                        </div>


                        <Jumbotron className="text-white bg-dark">

                            <div>

                                <h1>{this.props.playMovieData.title}</h1>

                            </div>

                            <h1>{this.props.playMovieData.genre}</h1>

                            <h1>{this.props.playMovieData.year}</h1>

                            <h1>{this.props.playMovieData.studio}</h1>

                            <h1>{this.props.playMovieData.director}</h1>

                            <h1>{this.props.playMovieData.actors}</h1>

                            <h1>{this.props.playMovieData.rating}</h1>

                            <h1>{this.props.playMovieData.availability}</h1>


                        </Jumbotron>

                        <br></br>

                        <br/>
                        <br/>

                        <div className = "container">

                            <form id="review-form">

                                <h1 className = "text-muted"><Label>Write a review!</Label></h1>
                                <br></br>

                                <div>


                                    <input type="text" name="review" placeholder ="Enter review" onChange= {(e)=>{this.movieReview.review=e.target.value}}/>

                                    <br></br>

                                    <br></br>

                                    <input type="txt" name="rating" placeholder ="Enter rating" onChange= {(e)=>{this.movieReview.reviewRating=e.target.value}}/>

                                    <br></br>

                                    <br></br>

                                </div>

                                <br></br>

                                <Button bsStyle="primary" onClick={()=> {this.handleReview()}}>
                                    Review!
                                </Button>

                            </form>

                          </div>

                          <br></br>

                          <br></br>

                          


                  </div>

                  <div className="container" >


                          <Jumbotron>

                              <p className="text-white bg-dark">

                                <b>Note:</b> If you have dues for the movie, please proceed to pay                   
                                <Button bsStyle="primary" onClick={()=> {this.makeMoviePayment()}}>
                                     Here
                                </Button>

                                  <br>
                                  </br>

                                  <br></br>
                                  <b>Note:</b> If no dues, the movie will start automatically. Enjoy!

                                  <br></br>
                                  <br></br>

                                  
                                  <b>Subscribed Users</b> : Play <b>Free</b>, <b>SubscriptionOnly</b> and <b>Paid</b> movies without paying a penny.
                                  <br></br>
                                        Check subscription <a href = 'http://localhost:3000/subscription'>here</a>.

                                        <br></br>
                                        <br></br>

                                        

                                    <b>Non-subscribed</b> users, please subscribe <a href = 'http://localhost:3000/subscription'>here</a> to avail all the above benefits.
                                    <br></br>

                              </p>


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

export default PlayMovieUser;
