import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero' 
import ProblemEditor from './components/Problem+Editor/ProblemEditor'
// import Whiteboard from './components/WhiteBoard/WhiteBoard'
import './App.css'

function App() { 

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <ProblemEditor></ProblemEditor>
      {/* <Whiteboard></Whiteboard>  */}
    </>
  )
}

export default App
