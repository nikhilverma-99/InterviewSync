import { useEffect, useState, createContext, useContext,lazy,Suspense  } from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'  
import './App.css'
import './mediaquery.css'
// import Editor from './components/CodeEditor/Editor'
import Loading from './components/Loading/Loading'
const TextEditor = lazy(()=> import('./components/QuestionTextEditor/TextEditor')) 
const ProblemEditor = lazy(()=>import('./components/Problem+Editor/ProblemEditor'))
const Login = lazy(()=>import('./components/Login/Login'))
// import Table from './components/Table/Table'
const Error = lazy(()=> import('./components/Error/Error')) 
// import MaterialTable from './components/Table/MaterialTable'
import { Route, Routes } from 'react-router-dom'
import VideoCall from './components/Dyanamic Width Components/VideoCall'
import HowItWorks from './components/How it Works/HowItWorks'
import Admin from './components/Admin/Admin'
import Dashboard from './components/Admin/DashBoard/Dashboard'
import CreateInterview from './components/Admin/DashBoard/CreateInterview'
import AllInterview from './components/Admin/DashBoard/AllInterview'

// import Adjustable from './components/Adjustable/Adjustable'


import Pricing from './components/pricing/Pricing'
import Register from './components/register/Register'
const CodeCollabContext = createContext();
 
function App() { 
  const [selectedTheme, setSelectedTheme] = useState('');   
  return ( 
    <>
      <CodeCollabContext.Provider value={{selectedTheme,setSelectedTheme}}> 
      <Suspense fallback={<Loading></Loading>}>
      <Routes>
            <Route   path='/' element={
                <> 
                <NavBar></NavBar>
                <Hero></Hero>
                <HowItWorks></HowItWorks>  
                <Pricing></Pricing>
                </>
            }/> 
            <Route path='enterInterview' element={<Login></Login>}></Route>
            <Route path='videocalling' element={<VideoCall></VideoCall>}></Route>  
            <Route path='problemEditor/:type' element={<ProblemEditor></ProblemEditor>}></Route>
          
            <Route path='dashboard' element={<Admin/>}>
                <Route index element={<Dashboard/>}/>
                <Route path='createInterview' element={<CreateInterview/>}/>
                <Route path='allInterview' element={<AllInterview/>}/> 
                <Route path='addQuestion' element={<TextEditor/>}/>  
            </Route>
            <Route path='/register' element={<Register></Register>}/>
            <Route path='*' element={<Error />} />
        </Routes>

        </Suspense>  
      </CodeCollabContext.Provider> 

    </>
  )
}
export const useCodeCollabContext = () => useContext(CodeCollabContext); 
export default App
