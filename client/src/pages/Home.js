import React from "react"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Footer from  "../components/Footer"
import Location from "../components/Location"
import "../App.css"


function Home(){
    return (
        <div className="Home">
        <NavBar />
        <div className="mapp">
        <Location />
        </div>
        
         <Header />
         
          <p className="App-intro">
           
            <img src= "https://www.gpbnews.org/sites/wjsp/files/styles/medium/public/201712/homelessness_food.jpg"></img>
          </p>
          <Footer />
        </div>
      );
}


export default Home