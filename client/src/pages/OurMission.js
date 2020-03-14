import React from 'react'

import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Footer from  "../components/Footer"

function OurMission() {
    return(
        <>
        <NavBar />
         <Header />
         <p>With so much food being wasted in the US alone(about 33 percent of our total supply), we are striving to connect unused and unsold food from restaurants to non profits that can then redistribute 
             to hungry people. Were essentially bridging the gap and allowing restaurants to donate with tax rebates and not waste a morsel of presious food when there are hungry people in our country. 

         </p>
         <img src="https://images.unsplash.com/flagged/photo-1570088782323-e49798c279f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" ></img>
         <Footer />
        
        </>
    )
    
}

export default OurMission