import React, { Component } from 'react';
import {Label, Button} from 'react-bootstrap';
import UserHeader from './UserHeader';
import Footer from './Footer';
import '../App.css';
import {history} from '../utils/utils';



class Pay extends Component {

    handlePayment(){

        console.log("Payment attempted")
        history.push("/userMovies")

    }



  render() {
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

          <br></br>

          <br></br>

          



          <form id="payment-form">

            <h1><Label>Pay Now!</Label></h1>

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
          
            <Button bsStyle="primary" onClick={()=> {this.handlePayment()}}>
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

export default Pay;