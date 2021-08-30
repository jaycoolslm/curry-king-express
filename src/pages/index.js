import * as React from "react"
import '@fontsource/roboto';
import TopBar from "../components/TopBar"
import Layout from "../components/Layout"
import BottomBar from "../components/BottomBar"

const LandingPage = () => {
  return (
    <main>
      <TopBar />
      <Layout
        header="Curry in a Hurry" 
      />
      <BottomBar />
    </main>
  )
}

export default LandingPage