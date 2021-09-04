import * as React from "react"
import '@fontsource/roboto';
import TopBar from "../components/TopBar"
import LandingPage from "../components/LandingPage";
import BottomBar from "../components/BottomBar"

const Home = () => {
  return (
    <main style={{height: '200vh'}}>
      <TopBar />
      <LandingPage 
        backgroundImg="https://images.yourstylishhome.co.uk/nproducts/morris_and_co_wallpaper/archive_iv_the_collector/indian/216444grey_pewter.jpg?fm=webp&fit=crop&p=gallery_preview&s=dea1835db73f086f803ec9391b868c22"
        title="Curry King Express"
        subtitle="Getting you a curry in a hurry"
      />
      <BottomBar />
    </main>
  )
}

export default Home