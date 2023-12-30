import React, { useEffect, useState } from 'react';
import * as monaco from 'monaco-editor';
import './Editor.css';
import { HiOutlineCodeBracket } from 'react-icons/hi2';
import MonacoEditor from 'react-monaco-editor';
import { IoSettingsOutline } from "react-icons/io5";
// Import your theme definitions here or define them in the same file
import MonoKai from './Themes/monokai.json';
import CodeSnippet from './CodeSnippet/codeSnippet.json'
import{fontSizes, programmingLanguages} from './Settings/editorSetting'
import { RiFontSize2 } from "react-icons/ri";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";

 

const CodeEditor = () => {
  const [fontSize, setFontSize] = useState(18);
  const [tabSize, setTabSize] = useState(2);  
  const [language,setLanguage] = useState('')
  const[settingOpen, setSettingOpen] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState('vs-dark'); // Default theme
  const [code, setCode] = useState("function hello(){\nalert('Hello world!');}");
  const themes = {
    'vs-dark': 'Dark Theme',
    'vs-light': 'Light Theme',
    'monokai': 'MonoKai Theme',
  }; 
  
  const editorOptions = {
    selectOnLineNumbers: true,
    fontSize,
    tabSize,
    fontFamily: '"Source Code Pro", monospace',
  };
  useEffect(() => {
    // Dispose of the previous editor instance before creating a new one 
    monaco.editor.defineTheme('monokai', MonoKai); 
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

  return (
    <div className='editor-continer'>
      <div className= {selectedTheme==='vs-light'?"editor-top1 blue":"editor-top1"}> 
        <HiOutlineCodeBracket className="code-icon" />
        <label> Code</label>
        <select className= {selectedTheme==='vs-light'?"form-select-blue":"form-select"} value={language} onChange={handleLanguageChange}>
          {Object.entries(programmingLanguages).map(([themeKey, themeLabel]) => (
            <option key={themeKey} value={themeKey}>{themeLabel}</option>
            ))}
        </select>
            <IoSettingsOutline className={settingOpen?'setting-icon rotate':'setting-icon'} id={selectedTheme==='vs-light'?'white':null} onClick={handleSettingOpen} />
             <MdContentCopy className='copy-button' onClick={handleCopyToClipboard} id={selectedTheme==='vs-light'?'white':null}/>

      </div>
      {/* <div id="container" style={{ height: '600px' }}></div> */}
      <MonacoEditor
      width="100%"
      height="600"
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
              <div className='settings-left' id={selectedTheme==='vs-light'?'setting-L-light':null} >
                <span style={{ marginLeft: '-11rem' }} className='settings-left-heading'>Settings</span> 
                  <ul className='left-content'>
                    <li className='left-content-item'>
                    <HiOutlineCodeBracket className='list-icon' />
                    <span>Code Editor</span>
                    </li>
                  </ul>  
              </div>
              <div className='settings-right'  id={selectedTheme==='vs-light'?'setting-R-light':null} >
                <div className='setting-right-content'>

                  <div className='setting-input' >
                    <label className='setting-input-label'><MdOutlineDarkMode className='settings-icon'/> <span>Theme</span></label>
                    <select className='form-select select-dark' value={selectedTheme} id={selectedTheme==='vs-light'?'setting-light-select':null} onChange={handleThemeChange}>
                        {Object.entries(themes).map(([themeKey, themeLabel]) => (
                          <option key={themeKey} value={themeKey}>{themeLabel}</option>
                          ))}
                      </select>
                  </div>
               

                  <div className='setting-input'>
                    <label className='setting-input-label'><RiFontSize2 className='settings-icon'/> <span>Font Size</span></label>
                    <select className='form-select select-dark' value={fontSize} id={selectedTheme==='vs-light'?'setting-light-select':null}  onChange={handleFontChange}>
                    {fontSizes.map((size) => (
                    <option key={size } value={size}>{size+' px'}</option>))}
                    </select>
                  </div>

                </div>
              </div>
            </div>
          </section>
      </section>
      }
      <div className= {selectedTheme==='vs-light'?"editor-bottom blue":"editor-bottom"}> 
      <button> Run</button>
      </div>
    </div>
    
  );
};

export default CodeEditor;
