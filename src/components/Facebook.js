import React, { Component } from "react"
import {history} from '../utils/utils';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
const headers = {
  'Accept': 'application/json'
};

const facebookRegistrationUrl = 'http://ec2-52-53-167-184.us-west-1.compute.amazonaws.com:8080/user/loginsocial';

firebase.initializeApp({
  apiKey: "AIzaSyD_BERG4LGWOsgR1xMeFBNvu7SRuie3GzI",
  authDomain: "netflix-auth.firebaseapp.com"
})

class Facebook extends Component {
  facebookRegistrationCreds = {
    "name" : "",
    "email" : ""
  }
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
      try{

        this.facebookRegistrationCreds.name=user.displayName;
        this.facebookRegistrationCreds.email=user.email;
        console.log(this.facebookRegistrationCreds.name)
        console.log(this.facebookRegistrationCreds.email)
        this.handleRegister();

      }catch(err){
        console.log(err);
      }

    })
  }

  handleRegister(e){

    console.log("Registration attempted");

    fetch(`${facebookRegistrationUrl}`, {
        method: 'POST',
        credentials:'include',
        mode: 'cors',
        headers: { ...headers,'Content-Type': 'application/json' },
        body: JSON.stringify(this.facebookRegistrationCreds)
    }).then(res => {
        if(res.status === 200){
            console.log("facebook login Successfully!!")
          }
        else{
            console.log("facebook login error!!")
          }
        }).catch(err => {
            console.log("facebook login server error!!!");
            return err;
            });

}

  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <span>
             {history.push("/userMovies")}
            />
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default Facebook