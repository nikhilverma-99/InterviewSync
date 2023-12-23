import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import {
  Route,
  Routes,
} from "react-router-dom";
import './App.css'

function App() { 

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Routes>
        {/* <Route path='/'/> */}
      </Routes>
    </>
  )
}

export default App
