import React from 'react'
import { Card, CardText, Button, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Footer from  "../components/Footer"
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'



firebase.initializeApp({
    apiKey: "AIzaSyB5-7jOOiVIW7H_xbfORuVyXOWWX0EEVkQ",
    authDomain: "my-first-auth-268804.firebaseapp.com"
  })

  class Signin extends React.Component {
    state={
      isSignedIn: false
    }
    
    uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ],
      callbacks:{
        signInSuccess: () => false
      }
    }
    
    componentDidMount = () => {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({isSignedIn: !!user})
        console.log("user", firebase.auth().currentUser)
      })
    }
    
    render(){
      return (
        <>
        <NavBar />
        <Header />
        <div className="App">
        {this.state.isSignedIn ? (
          <>
          <br/> 
          <br/>
          <div>Signed In</div>
          <br/> 
          <br/>
          <button onClick={()=> firebase.auth().signOut()}>Sign Out</button>
          <h1>Welcome { firebase.auth().currentUser.displayName }</h1>
          <img alt="user" src={ firebase.auth().currentUser.photoURL }/>
          <Row>
            <Card className="card" body inverse style={{ backgroundColor: "#e0cf2e" }}>
            
        <CardText className="cardText">I have food to donate and want to be matched with people in need.</CardText>
                    <Link to ='/Give'>
                      <Button className="button2">Give!</Button>
                    </Link>
            </Card>

            <Card body inverse style={{ backgroundColor: "#e0cf2e" }}>
             
        <CardText className="cardText">I am a non-profit and want to be matched with donations {'          '}</CardText>
                  <Link to = '/Receive'> 
                    <Button className="button2">Recieve!</Button>
                  </Link>
            </Card>
            <Card body inverse style={{ backgroundColor: "#e0cf2e"}}>
            
              <CardText className="cardText">I want to read more about this amazing company.</CardText>
              <Link to = '/'>
              <Button className="button2">Home!</Button>
              </Link>
            </Card>
            </Row>
          </>
        ) : (
          <>
          <br/> 
          <br/>
          <div className="uiConfig">
          <h2>Welcome to</h2>
          <h1>Waste Not, Want Not</h1>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
          </div>
          </>
        )}
      </div>
        <Footer />
       </>
      )
    }
    }

export default Signin