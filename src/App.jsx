import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import CodeEditor from './components/CodeEditor/Editor'
import './App.css'

function App() { 

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <CodeEditor/>
    </>
  )
}

export default App
