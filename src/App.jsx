import { useEffect, useState, createContext, useContext,lazy,Suspense  } from 'react'
 
import './App.css'
import './mediaquery.css' 
import LandingPage from './components/LandingPage/LandingPage'
import Loading from './components/Loading/Loading'
const TextEditor = lazy(()=> import('./components/QuestionTextEditor/TextEditor')) 
const ProblemEditor = lazy(()=>import('./components/Problem+Editor/ProblemEditor'))
const Login = lazy(()=>import('./components/Login/Login')) 
const Error = lazy(()=> import('./components/Error/Error'))  
const Register = lazy(()=>import('./components/register/Register'))  
const Admin  =lazy(()=> import('./components/Admin/Admin')) 
import { Route, Routes } from 'react-router-dom'
import VideoCall from './components/Dyanamic Width Components/VideoCall' 
import Dashboard from './components/Admin/DashBoard/Dashboard'
import CreateInterview from './components/Admin/DashBoard/CreateInterview'
import AllInterview from './components/Admin/DashBoard/AllInterview'
const UserLogin  = lazy(()=>import('./components/UserLogin/UserLogin')) 
// import Adjustable from './components/Adjustable/Adjustable'


import Pricing from './components/pricing/Pricing'
const CodeCollabContext = createContext();
 
function App() { 
  const [selectedTheme, setSelectedTheme] = useState('');   
  return ( 
    <>
      <CodeCollabContext.Provider value={{selectedTheme,setSelectedTheme}}> 
      <Suspense fallback={<Loading></Loading>}>
      <Routes>
            <Route   path='/' element={
               <LandingPage></LandingPage>
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
            <Route path='/login' element={<UserLogin></UserLogin>}/>
            <Route path='*' element={<Error />} />
        </Routes>

        </Suspense>  
      </CodeCollabContext.Provider> 

    </>
  )
}
export const useCodeCollabContext = () => useContext(CodeCollabContext); 
export default App
