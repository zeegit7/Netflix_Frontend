import React, { Component } from 'react';
import {Label, Button} from 'react-bootstrap';
//import {history} from '../utils/utils';
import UserHeader from './UserHeader';
import Footer from './Footer';
import '../App.css';
import {history} from '../utils/utils';

const headers = {
    'Accept': 'application/json'
  };

  

  var subscribtionEndDateUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/subscription/checkSubscriptionStatus/';

  var subscribeUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/subscription/payForSubscription';


class Subscription extends Component {

    
    constructor(){

        super();

        this.state={

            subscriptionEndDate:"N/A",
            errors : [],
            showErrorMessages:false,
            messageType : "alert alert-light" 

        };


        this.subsriptionDetails = {

            "month" : "",
            "email" : "zeeshan.ali"

        }

    }


    handleSubscription(e){

        this.state.errors = [];

        this.setState({messageType:"alert alert-light"})

        console.log("Subscription attempted");

        this.subsriptionDetails.month = parseInt(this.subsriptionDetails.month);

        if(isNaN(this.subsriptionDetails.month)){
            console.log("enter valid number of months")
          this.state.errors.push("enter valid number of months!");
        }

        if(this.state.errors.length>0){
            this.setState({messageType:"alert alert-danger"})
            return
          }

        console.log(this.subsriptionDetails.month);

        fetch(`${subscribeUrl}`, {
            method: 'POST',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json'},
            body: JSON.stringify(this.subsriptionDetails)
        }).then(res => res.json())
        .then(res => {
            console.log("res",res)
            if(res.subscriptionEndDate){
                console.log("Subscription Successful!!")
                this.setState({subscriptionEndDate:res.subscriptionEndDate})
                history.push("/subscription");

              }
            else{
                console.log("Subscription Error!!")
              }
            }).catch(err => {
                console.log("Subscription server error!!!");
                return err;
                });

        this.subsriptionDetails.month = "";

        document.getElementById("subscription-form").reset();



    }

    handlePayment(){

        console.log("Payment attempted")
    }

    getSubscriptionEndDate(){

        this.state.errors = [];

        this.setState({messageType:"alert-alert-light"})

        console.log("Getting subscription end date")


        fetch(`${subscribtionEndDateUrl}`, {
            method: 'GET',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(res => {
            if(res){
                console.log("res",res.subscriptionEndDate)
                console.log("getSubscriptionEndDate Successful!!")
                this.setState({subscriptionEndDate:res.subscriptionEndDate})

              }
            else{
                console.log("getSubscriptionEndDate Error!!")
              }
            }).catch(err => {
                console.log("getSubscriptionEndDate server error!!!");
                return err;
                });



    }

    componentWillMount(){

        this.getSubscriptionEndDate();
    }

  render() {

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

           <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">

            <br/>
            <br/>

            <div>
              <h1 className="text-muted">Your subscription ends on: {this.state.subscriptionEndDate} </h1>
          </div>

          <br></br>

          <br></br>

            <div className={this.state.messageType}>

            {errors}

            </div>



          



          <form id="subscription-form">

            <h1 className="text-muted"><Label>Subscribe/Extend Now : $10 per month only!</Label></h1>

            <br></br>
            <br></br>


            <input name="months" placeholder ="Enter number of months" onChange= {(e)=>{this.subsriptionDetails.month=e.target.value}}/>

            <br></br>

            <br></br>

            <input name="card_number" placeholder ="Enter card number"/>

            <br></br>

            <br></br>

            <input name="cvv" placeholder ="Enter CVV"/>

            <br></br>

            <br></br>

            <input name="expiry" placeholder ="Enter expiry (mm/yyyy)"/>

            <br></br>

            <br></br>

                        <br></br>
          
            <Button bsStyle="primary" onClick={()=> {this.handleSubscription()}}>
                Pay
            </Button>
          
          
          </form>

          </div>
          <div className="col-sm-1"></div>
        </div>

        <br/><br/>


          

          <div>
              <Footer/>
          </div>



      </div>
    );
  }
}

export default Subscription;