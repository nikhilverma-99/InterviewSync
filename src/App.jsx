import { useEffect, useState, createContext, useContext } from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'  
import ProblemEditor from './components/Problem+Editor/ProblemEditor'
import './App.css'
import TextEditor from './components/QuestionTextEditor/TextEditor'
import Login from './components/Login/Login'
import Table from './components/Table/Table'
import { Route, Routes } from 'react-router-dom'
import VideoCall from './components/Dyanamic Width Components/VideoCall'
import HowItWorks from './components/How it Works/HowItWorks'
const CodeCollabContext = createContext();
function App() { 
  const [selectedTheme, setSelectedTheme] = useState();  
  return (
    <>
    <CodeCollabContext.Provider value={{selectedTheme,setSelectedTheme}}> 
      <Routes>
        <Route path='/' element={
          <> 
            <NavBar></NavBar>
            <Hero></Hero>
            <HowItWorks></HowItWorks>
          </>}> 
        </Route>

        <Route path='/enterInterview' element={<Login></Login>}></Route>
        <Route path='/videocalling' element={<VideoCall></VideoCall>}></Route>

        <Route path='/problemEditor' element={<ProblemEditor></ProblemEditor>}></Route>
      </Routes>
  
    </CodeCollabContext.Provider>
       {/* <Login></Login> */}
      {/* <TextEditor></TextEditor>  */}
      {/* <Table></Table> */}
      {/* <Login></Login> */}
    </>
  )
}
export const useCodeCollabContext = () => useContext(CodeCollabContext); 
export default App
