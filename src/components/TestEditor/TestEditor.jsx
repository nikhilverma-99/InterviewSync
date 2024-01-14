import React, { useState,useEffect } from "react"; 
import Editor from "@monaco-editor/react";
import Logo from '../../images/Loading.gif'

const CodeEditorWindow = ({ onChange, language, code, theme,options }) => {
  const [value, setValue] = useState(code || "");
  const [cTheme, setTheme] = useState(theme || "");

 useEffect(()=>{
  if(theme){
    {
      setTheme(theme) 
      console.log(theme)
    }
  }

  if(code)
  {
    setValue(code) 
    console.log(code);
    
  }

 },[language,theme,code])
  const handleEditorChange = (value) => {
    setValue(value); 
    onChange(value);
  };  
  return (
    <code >
      <Editor
        height="81vh"
        width={`100%`} 
        language={language} 
        value={value}
        theme={cTheme} 
        onChange={handleEditorChange} 
        options={options}
        loading={<img  src={Logo}/>}
      />
    </code>
  );
};
export default CodeEditorWindow;