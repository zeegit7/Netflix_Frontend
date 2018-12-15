import React, { Component } from 'react';
import {Label, Button} from 'react-bootstrap';
import {history} from '../utils/utils';
import LoginHeader from './LoginHeader';
import Facebook from './Facebook';
import '../App.css';

const headers = {
    'Accept': 'application/json'
  };


class Login extends Component {

    
    constructor(){

        super();

        this.state={

            errors : [],
            showErrorMessages:false,
            messageType : "alert alert-light"
        };

        this.loginCredentials = {

            "email" : "",
            "password" : ""

        } ;

    }


    handleLogin(e){

        this.state.errors=[];

        var loginUrl = 'http://localhost:8080/user/login?email='+this.loginCredentials.email+'&password='+this.loginCredentials.password;

        console.log("Login attempted");

        this.populateErrors();

        if(this.state.errors.length>0){
            this.setState({messageType:"alert alert-danger"})
            return;
        }

        console.log(this.loginCredentials);

        fetch(`${loginUrl}`, {
            method: 'GET',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(res => {
            if(res){
                console.log("Login Successful!!");
                if(this.loginCredentials.email.includes("sjsu.edu")){
                    history.push("/adminMovies");
                }else{
                    history.push("/userMovies");
                }
                
              }
            else{
                console.log("Login Error!!")
                this.state.errors.push("Please enter valid credentials")
                this.setState({messageType:"alert alert-danger"})
              }
            }).catch(err => {
                console.log("Login server error!!!");
                this.state.errors.push("Please enter valid credentials")
                this.setState({messageType:"alert alert-danger"})
                return err;
                });


            document.getElementById("login-form").reset();

    }


    populateErrors(){

        if(this.loginCredentials.email <1 ){
            this.state.errors.push("Please enter email ")
        }

                
        if(this.loginCredentials.password.length < 1 ){
            this.state.errors.push("Please enter password")
        }

        console.log("errors",this.state.errors)

    }

  render() {

    let errors = this.state.errors.map((error, i)=>{
        return(

            <p>
                {error}
            </p>
  
    )});
    return (
      <div className = "mainBodyLogin">

          <div>
              <LoginHeader/>
          </div>


          <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">

            <br/>
            <br/>



                <form id="login-form">

                    
                    <br></br>

                    <div>
                        <br></br>
                        <div className="textBox">

                        <h1 style={{color: 'red'}}><Label>Login</Label></h1>

                        <br></br>

                            <input type="email" className="inputfield" name="email" placeholder="Enter Email" onChange= {(e)=>{this.loginCredentials.email=e.target.value}}/>

                            <br></br>

                            <br></br>

                            <input type="password" className="inputfield" name="password" placeholder ="Enter password" onChange= {(e)=>{this.loginCredentials.password=e.target.value}}/>
                            <br/>
                            <br/>
                            <div style={{color: 'red', float: 'left', marginLeft: '5%'}}>{errors}</div>
                            
                            <br/>
                            <Button bsStyle="danger" onClick={()=> {this.handleLogin()}} style={{width: "90%", fontSize: 18, fontWeight: 700, backgroundColor: 'red'}}>
                                Login
                            </Button>

                            <br></br>
                            <br></br>

                            <Facebook/>



                        </div>
                    </div>
                </form>



          </div>
          <div className="col-sm-1"></div>
        </div>


          <div>
              {/* <Footer/> */}
          </div>

      </div>
    );
  }
}

export default Login;