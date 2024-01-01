import { useEffect, useState, createContext, useContext } from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'  
import ProblemEditor from './components/Problem+Editor/ProblemEditor'
import './App.css'
import TextEditor from './components/QuestionTextEditor/TextEditor'
const CodeCollabContext = createContext();
function App() { 
  const [selectedTheme, setSelectedTheme] = useState();  
  return (
    <>
    <CodeCollabContext.Provider value={{selectedTheme,setSelectedTheme}}> 
      <NavBar></NavBar>
      <Hero></Hero> 
      <ProblemEditor></ProblemEditor>
      <TextEditor></TextEditor> 
    </CodeCollabContext.Provider>
    </>
  )
}
export const useCodeCollabContext = () => useContext(CodeCollabContext); 
export default App
