import React, { Component } from 'react';
import {history} from '../utils/utils';
import {Label, Button} from 'react-bootstrap';
import RegisterHeader from './RegisterHeader';
import Footer from './Footer';
import '../App.css';

var registrationUrl = 'http://localhost:8080/user/register';

const headers = {
    'Accept': 'application/json'
  };



class Register extends Component {

    
    constructor(){

        super();
        this.state={

            errors : [],
            showErrorMessages:false,
            messageType : "alert alert-light"
        };

        this.registrationCredentials = {

            "name" : "",
            "email" : "",
            "contact_no":"",
            "password" : "",
            "city" : "",
            "date":""

        } ;


    }

    formatDate() {

        var d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
    
        return [year, month, day].join('-');

    }


    populateErrors(){

        if(this.registrationCredentials.name.length <1 ){
            this.state.errors.push("Please enter name ")
        }

        
        if(this.registrationCredentials.email.length <1 ){
            this.state.errors.push("Please enter email ")
        }

        
        if(this.registrationCredentials.city.length <1 ){
            this.state.errors.push("Please enter city ")
        }

        
        if(this.registrationCredentials.contact_no.length <10 ){
            this.state.errors.push("Please enter valid contact number ")
        }

        
        if(this.registrationCredentials.password.length < 6 ){
            this.state.errors.push("Password must be atleast 6 characters long")
        }

        console.log("errors",this.state.errors)

        if(this.state.errors.length>0){
            this.setState({messageType:"alert alert-danger"})
        }


    }


    handleRegister(e){

        console.log("Registration attempted");

        var today = this.formatDate();

        this.populateErrors();

        this.registrationCredentials.date = today.toString();

        if(this.state.errors.length>0){
            return;
        }

        console.log(this.registrationCredentials);

        fetch(`${registrationUrl}`, {
            method: 'POST',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json' },
            body: JSON.stringify(this.registrationCredentials)
        }).then(res => {
            if(res.status === 200){
                console.log("Registered Successfully!!")
                history.push("/login");
              }
            else{
                console.log("Registration error!!")

              }
            }).catch(err => {
                console.log("Registration server error!!!");
                
                return err;
                });


            document.getElementById("register-form").reset();

    }


  render() {

    let errors = this.state.errors.map((error, i)=>{
        return(

            <div className="alert alert-danger container" role="alert">
                {error}
            </div>


  
    )});

    return (
      <div>

          <div>
              <RegisterHeader/>
          </div>

          <br></br>

          <br></br>

        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">

            <br/>
            <br/>



            <form id="register-form">

                <h1 className = "text-muted"><Label>Register</Label></h1>
                <br></br>

                <div>


                    <div className={this.state.messageType}>

                        {errors}

                    </div>

                    <br></br>
                    


                    <input type="text"  name="name" placeholder ="Enter Name" onChange= {(e)=>{this.registrationCredentials.name=e.target.value}}/>

                    <br></br>

                    <br></br>

                    <input type="text" name="contact" placeholder ="Enter phone number" onChange= {(e)=>{this.registrationCredentials.contact_no=e.target.value}}/>

                    <br></br>

                    <br></br>

                    <input type="text" name="city" placeholder ="Enter city" onChange= {(e)=>{this.registrationCredentials.city=e.target.value}}/>

                    <br></br>

                    <br></br>

                    <input type="email" name="email" placeholder ="Enter email" onChange= {(e)=>{this.registrationCredentials.email=e.target.value}}/>

                    <br></br>

                    <br></br>

                    <input type="password" name="password" placeholder ="Enter password" onChange= {(e)=>{this.registrationCredentials.password=e.target.value}}/>

                    <br></br>

                    <br></br>

                </div>

                <br></br>

                <Button bsStyle="primary" onClick={()=> {this.handleRegister()}}>
                    Register
                </Button>

                </form>



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

export default Register;