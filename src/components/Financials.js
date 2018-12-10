import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import Footer from './Footer';
import {Jumbotron,Button} from 'react-bootstrap';
import '../App.css';

const headers = {
    'Accept': 'application/json'
};


var uniqueSubscriptionUsersUrl = 'http://localhost:8080/subscription/uniqueSubscription/';
var uniquePpvUsersUrl = 'http://localhost:8080/payPerView/uniquePayPerViewUser/';
var uniqueActiveUsersUrl = 'http://localhost:8080/userDetails/totalUniqueActiveUser/';
var uniqueRegisteredUsersUrl = 'http://localhost:8080/userDetails/totalUniqueUser/';
var monthlySubscriptionIncomeUrl = 'http://localhost:8080/transaction/totalSubscriptionIncome/';
var monthlyPpvIncomeUrl = 'http://localhost:8080/transaction/payPerViewIncome/';
var monthlyTotalIncomeUrl = 'http://localhost:8080/transaction/totalIncome/';

class Financials extends Component {

    constructor(){

        super();

        this.state = {

            uniqueSubscriptionUsers : "NA",
            uniquePpvUsers : "NA",
            uniqueActiveUsers : "NA",
            uniqueRegisteredUsers : "NA",
            queryMonth : "",
            queryYear : "",
            monthlySubscriptionIncome : "NA",
            monthlyPpvIncome : "NA",
            monthlyTotalIncome : "NA",
            errors : [],
            showErrorMessages:false,
            messageType : "alert alert-light" 
   
        }


    }

    handleFinancesSearch(){
        this.state.errors = [];

        this.setState({messageType:"alert alert-light"})

        this.state.queryMonth = parseInt(this.state.queryMonth);

        this.state.queryYear = parseInt(this.state.queryYear);

        if(isNaN(this.state.queryMonth)){
            console.log("enter valid month")
          this.state.errors.push("enter valid  month!");
        }

        if(isNaN(this.state.queryYear)){
            console.log("enter valid year")
          this.state.errors.push("enter valid year!");
        }

        if(this.state.errors.length>0){
            this.setState({messageType:"alert alert-danger"})
            return
          }

        console.log("user wants financials for",this.state.queryMonth,"/",this.state.queryYear);

        this.getUniqueSubscriptionUsers();
    
        this.getUniquePpvUsers();
    
        this.getUniqueActiveUsers();
    
        this.getUniqueRegisteredUsers();
    
        this.getMonthlySubscriptionIncome();
    
        this.getMonthlyPpvIncome();
    
         this.getMonthlyTotalIncome();


    }

    getUniqueSubscriptionUsers(){

        console.log("getUniqueSubscriptionUsers");

        uniqueSubscriptionUsersUrl = uniqueSubscriptionUsersUrl + this.state.queryYear + '/' + this.state.queryMonth;

        fetch(`${uniqueSubscriptionUsersUrl}`, {
            method: 'GET',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(res => {
            if(res){
                console.log("res",res);
                this.setState({uniqueSubscriptionUsers:res})
                console.log("getUniqueSubscriptionUsers Successful!!")

              }
            else{
                console.log("getUniqueSubscriptionUsers Error!!")
              }
            }).catch(err => {
                console.log("getUniqueSubscriptionUsers server error!!!");
                return err;
                });


        uniqueSubscriptionUsersUrl = 'http://localhost:8080/payPerView/uniquePayPerViewUser/';

    }

    getUniquePpvUsers(){

        console.log("getUniquePpvUsers");

        uniquePpvUsersUrl = uniquePpvUsersUrl + this.state.queryYear + '/' + this.state.queryMonth;

        fetch(`${uniquePpvUsersUrl}`, {
            method: 'GET',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(res => {
            if(res){
                console.log("res",res);
                this.setState({uniquePpvUsers:res})
                console.log("getUniquePpvUsers Successful!!")

              }
            else{
                console.log("getUniquePpvUsers Error!!")
              }
            }).catch(err => {
                console.log("getUniquePpvUsers server error!!!");
                return err;
                });


        uniquePpvUsersUrl = 'http://localhost:8080/subscription/uniqueSubscription/';
      
    }

    getUniqueActiveUsers(){

        console.log("getUniqueActiveUsers");

        uniqueActiveUsersUrl = uniqueActiveUsersUrl + this.state.queryYear + '/' + this.state.queryMonth;

        fetch(`${uniqueActiveUsersUrl}`, {
            method: 'GET',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(res => {
            if(res){
                console.log("res",res);
                this.setState({uniqueActiveUsers:res})
                console.log("getUniqueActiveUsers Successful!!")

              }
            else{
                console.log("getUniqueActiveUsers Error!!")
              }
            }).catch(err => {
                console.log("getUniqueActiveUsers server error!!!");
                return err;
                });


        uniqueActiveUsersUrl = 'http://localhost:8080/userDetails/totalUniqueActiveUser/';
   
    }

    getUniqueRegisteredUsers(){

        console.log("getUniqueRegisteredUsers");

        uniqueRegisteredUsersUrl = uniqueRegisteredUsersUrl + this.state.queryYear + '/' + this.state.queryMonth;

        fetch(`${uniqueRegisteredUsersUrl}`, {
            method: 'GET',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(res => {
            if(res){
                console.log("res",res);
                this.setState({uniqueRegisteredUsers:res})
                console.log("getUniqueRegisteredUsers Successful!!")

              }
            else{
                console.log("getUniqueRegisteredUsers Error!!")
              }
            }).catch(err => {
                console.log("getUniqueRegisteredUsers server error!!!");
                return err;
                });


        uniqueRegisteredUsersUrl = 'http://localhost:8080/userDetails/totalUniqueUser/';


        
    }

    getMonthlySubscriptionIncome(){

        console.log("getMonthlySubscriptionIncome");

        monthlySubscriptionIncomeUrl = monthlySubscriptionIncomeUrl + this.state.queryYear + '/' + this.state.queryMonth;

        fetch(`${monthlySubscriptionIncomeUrl}`, {
            method: 'GET',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(res => {
            if(res){
                console.log("res",res);
                this.setState({monthlySubscriptionIncome:res})
                console.log("getMonthlySubscriptionIncome Successful!!")

              }
            else{
                console.log("getMonthlySubscriptionIncome Error!!")
              }
            }).catch(err => {
                console.log("getMonthlySubscriptionIncome server error!!!");
                return err;
                });

        monthlySubscriptionIncomeUrl = 'http://localhost:8080/transaction/totalSubscriptionIncome/';
        
    }

    getMonthlyPpvIncome(){

        console.log("getMonthlyPpvIncome");

        monthlyPpvIncomeUrl = monthlyPpvIncomeUrl + this.state.queryYear + '/' + this.state.queryMonth;

        fetch(`${monthlyPpvIncomeUrl}`, {
            method: 'GET',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(res => {
            if(res){
                console.log("res",res);
                this.setState({monthlyPpvIncome:res})
                console.log("getMonthlyPpvIncome Successful!!")

              }
            else{
                console.log("getMonthlyPpvIncome Error!!")
              }
            }).catch(err => {
                console.log("getMonthlyPpvIncome server error!!!");
                return err;
                });

        monthlyPpvIncomeUrl = 'http://localhost:8080/transaction/payPerViewIncome/';


        
    }

    getMonthlyTotalIncome(){

        console.log("getMonthlyTotalIncome");

        monthlyTotalIncomeUrl = monthlyTotalIncomeUrl + this.state.queryYear + '/' + this.state.queryMonth;

        fetch(`${monthlyTotalIncomeUrl}`, {
            method: 'GET',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(res => {
            if(res){
                console.log("res",res);
                this.setState({monthlyTotalIncome:res})
                console.log("getMonthlyTotalIncome Successful!!")

              }
            else{
                console.log("getMonthlyTotalIncome Error!!")
              }
            }).catch(err => {
                console.log("getMonthlyTotalIncome server error!!!");
                return err;
                });


        monthlyTotalIncomeUrl = 'http://localhost:8080/transaction/totalIncome/';


        
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
                <AdminHeader/>
            </div>

            <br></br>
            
            <div>
                <h1 className = "text-muted">Financials:</h1>
            </div>

            <br></br>

            <div className="container">

            <div className={this.state.messageType}>

                {errors}

            </div>


            </div>

            <br></br>

            


                <form id="add-movie-form">
                      
                      <input name="month" placeholder ="Enter month - mm" required = {true} onChange= {(e)=>{this.state.queryMonth=e.target.value}}/>
                      <input name="year" placeholder ="Enter year - yyyy" onChange= {(e)=>{this.state.queryYear=e.target.value}}/>

                      <br /><br />
                      <Button bsStyle="primary" onClick={()=> {this.handleFinancesSearch()}}>
                        Search
                      </Button>

                      <br /><br />
              
                </form>

            <br></br>

            <div className="container">
            
                <Jumbotron>

                    <h1>Unique Subscription Users : {this.state.uniqueSubscriptionUsers} </h1>

                    <h1>Unique PPV Users : {this.state.uniquePpvUsers}  </h1>

                    <h1>Unique Active Users : {this.state.uniqueActiveUsers}  </h1>

                    <h1>Unique Registered Users : {this.state.uniqueRegisteredUsers}  </h1>

                </Jumbotron>

            </div>

            
            <div className="container">
            
                <Jumbotron>

                    <h1>Subscription Income : ${this.state.monthlySubscriptionIncome} </h1>

                    <h1>PPV Income : ${this.state.monthlyPpvIncome}  </h1>

                    <h1>Total Income : ${this.state.monthlyTotalIncome}  </h1>

                </Jumbotron>

            </div>

            <br></br>
          

            <div>
                <Footer/>
            </div>

        </div>




    );
  }
}

export default Financials;
