import * as React from "react"
import '@fontsource/roboto';
import TopBar from "../components/TopBar"
import LandingPage from "../components/LandingPage";
import BottomBar from "../components/BottomBar"


// Images

import logo from  '../images/logo.png'


const Home = () => {
  return (
    <main style={{height: '200vh'}}>
      <TopBar />
      <LandingPage 
        backgroundImg={logo}
        // title="Curry King Express"
        // subtitle="Getting you a curry in a hurry"
      />
      <BottomBar />
    </main>
  )
}

export default Home