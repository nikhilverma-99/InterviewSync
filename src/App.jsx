import { useEffect, useState, createContext, useContext,lazy,Suspense } from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'  
import './App.css'
import Editor from './components/CodeEditor/Editor'
import Loading from './components/Loading/Loading'
import TextEditor from './components/QuestionTextEditor/TextEditor'
const ProblemEditor = lazy(()=>import('./components/Problem+Editor/ProblemEditor'))
const Login = lazy(()=>import('./components/Login/Login'))
import Table from './components/Table/Table'
// import Error from './components/Error/Error'
import { Route, Routes } from 'react-router-dom'
import VideoCall from './components/Dyanamic Width Components/VideoCall'
import HowItWorks from './components/How it Works/HowItWorks'
// import Pricing from './components/pricing/Pricing'
const CodeCollabContext = createContext();
function App() { 
  const [selectedTheme, setSelectedTheme] = useState('');   
  return (
    <>
    <CodeCollabContext.Provider value={{selectedTheme,setSelectedTheme}}>
    <Suspense fallback={<Loading></Loading>}>
      <Routes>
        <Route path='/' element={
          <> 
            <NavBar></NavBar>
            <Hero></Hero>
            <HowItWorks></HowItWorks>
            {/* <Pricing></Pricing> */}
            <Editor></Editor>
            {/* <Error></Error> */}
          </>}> 
        </Route>

        <Route path='/enterInterview' element={<Login></Login>}></Route>
        <Route path='/videocalling' element={<VideoCall></VideoCall>}></Route> 
        <Route path='/problemEditor/:type' element={<ProblemEditor></ProblemEditor>}></Route>
      </Routes>
      </Suspense> 
    </CodeCollabContext.Provider> 
    </>
  )
}
export const useCodeCollabContext = () => useContext(CodeCollabContext); 
export default App
