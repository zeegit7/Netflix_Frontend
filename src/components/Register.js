import React, { Component } from 'react';
import {history} from '../utils/utils';
import {Label, Button} from 'react-bootstrap';
import RegisterHeader from './RegisterHeader';
import '../App.css';

var registrationUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/user/register';

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

        this.state.errors = [];

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
                this.state.errors.push("User already registered. Please login!")
                this.setState({})
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

            <p>
                {error}
            </p>


  
    )});

    return (
      <div className = "mainBodyRegister">

          <div>
              <RegisterHeader/>
          </div>

        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">


            <form id="register-form">

                <div>

                        <br></br>

                    <div className="textBoxRegister">

                    <h1 style={{color: 'red'}}><Label>Register</Label></h1>

                    <br></br>

                        <input type="text" className="inputfield"  name="name" placeholder ="Enter Name" onChange= {(e)=>{this.registrationCredentials.name=e.target.value}}/>

                        <br></br>

                        <input type="text" className="inputfield" name="contact" placeholder ="Enter phone number" onChange= {(e)=>{this.registrationCredentials.contact_no=e.target.value}}/>

                        <br></br>

                        <input type="text" className="inputfield" name="city" placeholder ="Enter city" onChange= {(e)=>{this.registrationCredentials.city=e.target.value}}/>

                        <br></br>

                        <input type="email" className="inputfield" name="email" placeholder ="Enter email" onChange= {(e)=>{this.registrationCredentials.email=e.target.value}}/>

                        <br></br>

                        <input type="password" className="inputfield" name="password" placeholder ="Enter password" onChange= {(e)=>{this.registrationCredentials.password=e.target.value}}/>

                        <br></br>

                        <div style={{color: 'red', float: 'left', marginLeft: '5%'}}>{errors}</div>
                            
                            <br/>
                            <Button bsStyle="danger" onClick={()=> {this.handleRegister()}} style={{width: "90%", fontSize: 18, fontWeight: 700, backgroundColor: 'red'}}>
                                Register
                            </Button>


                    </div>

                </div>

                </form>



          </div>
          <div className="col-sm-1"></div>
        </div>


      </div>
    );
  }
}

export default Register;