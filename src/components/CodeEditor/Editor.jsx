import React, { useEffect, useState  } from 'react'; 
import * as monaco from 'monaco-editor';
import './Editor.css';
import { HiOutlineCodeBracket } from 'react-icons/hi2';
import MonacoEditor from 'react-monaco-editor';
import { IoSettingsOutline } from "react-icons/io5";
// Import your theme definitions here or define them in the same file
import MonoKai from './Themes/monokai.json';
import Cobalt from './Themes/Cobalt.json'; 

import CodeSnippet from './CodeSnippet/codeSnippet.json'
import{fontSizes, programmingLanguages,tabSizes} from './Settings/editorSetting'
import { RiFontSize2 } from "react-icons/ri";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { TbSpace } from "react-icons/tb";
import { IoPlay } from "react-icons/io5"; 

import {useCodeCollabContext} from '../../App'
const CodeEditor = () => {
  const [fontSize, setFontSize] = useState(18);
  const [tabSize, setTabSize] = useState(2);  
  // const [selectedTheme, setSelectedTheme] = useState(); // Default theme
  const [language,setLanguage] = useState('')
  const [settingOpen, setSettingOpen] = useState(false)
  const [code, setCode] = useState();
  const {selectedTheme,setSelectedTheme} = useCodeCollabContext();
  const themes = {
    'cobalt':'Cobalt', 
    'vs-dark': 'Dark Theme',
    'monokai': 'MonoKai Theme',
    'vs-light': 'Light Theme',
  }; 
  
  const editorOptions = {
    selectOnLineNumbers: true,
    fontSize: fontSize,
    tabSize: tabSize,
    fontFamily: 'Fira Code, Menlo, Monaco, "Courier New", monospace',
    lineHeight: 25,
    fontLigatures: true
  };
  useEffect(() => {
    // Dispose of the previous editor instance before creating a new one 
    monaco.editor.defineTheme('monokai', MonoKai); 
    monaco.editor.defineTheme('cobalt', Cobalt);   

    window.MonacoEnvironment = {
      getWorkerUrl: function (moduleId, label) {
        return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
          self.MonacoEnvironment = {
            baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/'
          };
          importScripts('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/base/worker/workerMain.js');
        `)}`;
      },
    }; 
    setLanguage('cpp');
    setCode(CodeSnippet.cpp)
    setSelectedTheme('cobalt')
    return () => {
     <></> 
    };
  }, []);

  const handleEditorDidMount = (editor) => {
    // You can do additional customization or handling after the editor is mounted
    
  };

  const handleThemeChange = (event) => {
    const newTheme = event.target.value;
    setSelectedTheme(newTheme);
  };
  const handleFontChange = (event) => {
    const newFontSize = event.target.value;
    setFontSize(newFontSize);
  };
  const handleTabSize = (event) => {
    const newTabSize = event.target.value;
    console.log(newTabSize);
    
    setTabSize(newTabSize);
  };
  const runCode = async()=>{
    console.log(code) 
  }
  const handleCodeChange = (newValue, event) => { 
    setCode(newValue);
  }
  const handleSettingOpen = ()=>{
    setSettingOpen((cSetting)=>{
      return !cSetting;
    })
  }

  const handleCopyToClipboard = async () => {
    try{
      await navigator.clipboard.writeText(code)
      //Popup code copied Sucesfully
      alert('Code Copied!')
    }
    catch(e)
    {
      console.log("Error in copy")
    }
      
  };
  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
     
    const model = monaco.editor.getModels()[0]; // Assuming you have only one model
     
    setCode(CodeSnippet[newLanguage])
    monaco.editor.setModelLanguage(model, newLanguage);
  };

  const EditorThemeColor ={
    'vs-dark': '#2f2f2f',
    'vs-light': '#002eb8',
    'monokai': '#2f2f2f',
    'cobalt':'#01111f', 
  }

  const settingRight ={
    'vs-dark': '#4d4d4d',
    'vs-light': '#0038e0',
    'monokai': '#494b40',
    'cobalt':'#01305b',
    
  }
  const settingLeft = {
    'vs-dark': '#2e2d2d',
    'vs-light': '#002eb8',
    'monokai': '#272822',
    'cobalt':'#01203b'
  }
  const buttonTheme ={
    'vs-dark': '#454343',
    'vs-light': '#0037db',
    'monokai': '#272822',
    'cobalt':'#01203b'
  }
  const selectInputThemes={
    'vs-dark': '#2f2f2f',
    'vs-light': '#002eb8',
    'monokai': '#2f2f2f',
    'cobalt':'#01111f'
  }
  return ( 
    <div className='editor-continer'>
      <div className="editor-top1" style={{backgroundColor:`${EditorThemeColor[selectedTheme]}`}}> 
        <HiOutlineCodeBracket className="code-icon" />
        <label> Code</label>
        <select className= "form-select" style={{backgroundColor:`${EditorThemeColor[selectedTheme]}`}} value={language} onChange={handleLanguageChange}>
          {Object.entries(programmingLanguages).map(([themeKey, themeLabel]) => (
            <option key={themeKey} value={themeKey}>{themeLabel}</option>
            ))}
        </select>
        <div style={{ marginLeft: 'auto' , display:'flex',gap:'1rem'}}> 
             <MdContentCopy className='copy-button' onClick={handleCopyToClipboard} id={selectedTheme==='vs-light'?'white':null}/>
            <IoSettingsOutline className={settingOpen?'setting-icon rotate':'setting-icon'} id={selectedTheme==='vs-light'?'white':null} onClick={handleSettingOpen} /> 
        </div>
      </div>
      {/* <div id="container" style={{ height: '600px' }}></div> */}
      <MonacoEditor
      width="100%" 
      height="90%"
      language={language}
      theme={selectedTheme}
      value = {code}
      options={editorOptions}
      onChange={handleCodeChange}
      editorDidMount={handleEditorDidMount} 
      /> 
      {
        settingOpen 
          && 
        <section className='setting-popup' id={selectedTheme==='vs-light'?'popup-light':null}>  
          <section className="section-settingPopup">
            <div className="container-editorSetting">
              <div className='settings-left' style={{backgroundColor:`${settingLeft[selectedTheme]}`}} >
                <span style={{ marginLeft: '-11rem' }} className='settings-left-heading'>Settings</span> 
                  <ul className='left-content'>
                    <li className='left-content-item'>
                    <HiOutlineCodeBracket className='list-icon' />
                    <span>Code Editor</span>
                    </li>
                  </ul>  
              </div>
              <div className='settings-right' style={{backgroundColor:`${settingRight[selectedTheme]}`}} >
                <div className='setting-right-content'>

                  <div className='setting-input' >
                    <label className='setting-input-label'><MdOutlineDarkMode className='settings-icon'/> <span>Theme</span></label>
                    <select className='form-select select-dark' value={selectedTheme}   style={{backgroundColor:`${settingLeft[selectedTheme]}`}} onChange={handleThemeChange}>
                        {Object.entries(themes).map(([themeKey, themeLabel]) => (
                          <option key={themeKey} value={themeKey}>{themeLabel}</option>
                          ))}
                      </select>
                  </div>
               

                  <div className='setting-input'>
                    <label className='setting-input-label'><RiFontSize2 className='settings-icon'/> <span>Font Size</span></label>
                    <select className='form-select select-dark' value={fontSize}    style={{backgroundColor:`${settingLeft[selectedTheme]}`}}  onChange={handleFontChange}>
                    {fontSizes.map((size) => (
                    <option key={size } value={size}>{size+' px'}</option>))}
                    </select>
                  </div>
                  <div className='setting-input'>
                    <label className='setting-input-label'><TbSpace className='settings-icon'/> <span>Tab Size</span></label>
                    <select className='form-select select-dark' value={tabSize}     style={{backgroundColor:`${settingLeft[selectedTheme]}`}} onChange={handleTabSize}>
                    {tabSizes.map((size) => (
                    <option key={size } value={size}>{size}</option>))}
                    </select>
                  </div> 
                </div>
              </div>
            </div>
          </section>
      </section>
      }
      <div onClick={runCode} className= "editor-bottom" style={{backgroundColor:`${EditorThemeColor[selectedTheme]}`}} > 
       <div className='btn-run'style={{backgroundColor:`${buttonTheme[selectedTheme]}`}}> 
        <IoPlay className='btn-run-icon'/>
        <a>Run</a>
       </div>
      </div>
    </div> 
  );
};

export default CodeEditor;
