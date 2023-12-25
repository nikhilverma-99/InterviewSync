import React, { useEffect, useState } from 'react';
import * as monaco from 'monaco-editor';
import './Editor.css';
import { HiOutlineCodeBracket } from 'react-icons/hi2';
import MonacoEditor from 'react-monaco-editor';
import { IoSettingsOutline } from "react-icons/io5";
// Import your theme definitions here or define them in the same file
// import darkTheme from './Themes/monokai.json';
import{fontSizes, programmingLanguages} from './Settings/editorSetting'
const CodeEditor = () => {
  const [fontSize, setFontSize] = useState(18);
  const [tabSize, setTabSize] = useState(2);  
  const [language,setLanguage] = useState('cpp')
  const [selectedTheme, setSelectedTheme] = useState('vs-dark'); // Default theme
  const [code, setCode] = useState("function hello(){\nalert('Hello world!');}");
  const themes = {
    'vs-dark': 'Dark Theme',
    'vs-light': 'Light Theme',
    'monokai': 'MonoKai Theme',
  };
  console.log(fontSizes);
  
  const editorOptions = {
    selectOnLineNumbers: true,
    fontSize,
    tabSize,
    fontFamily: '"Source Code Pro", monospace',
  };
  useEffect(() => {
    // Dispose of the previous editor instance before creating a new one 
    monaco.editor.defineTheme('monokai', darkTheme); 
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
    
    return () => {
     <></> 
    };
  }, []);

  const handleEditorDidMount = (editor) => {
    // You can do additional customization or handling after the editor is mounted
    console.log('Editor mounted:', editor);
  };

  const handleThemeChange = (event) => {
    const newTheme = event.target.value;
    setSelectedTheme(newTheme);
  };
  const handleFontChange = (event) => {
    const newFontSize = event.target.value;
    setFontSize(newFontSize);
  };

  return (
    <div className='editor-continer'>
      <div className="editor-top1"> 
        <HiOutlineCodeBracket className="code-icon" />
        <label> Code</label>
        <select value={selectedTheme} onChange={handleThemeChange}>
          {Object.entries(themes).map(([themeKey, themeLabel]) => (
            <option key={themeKey} value={themeKey}>{themeLabel}</option>
            ))}
        </select>

        <select value={language} onChange={setLanguage}>
          {Object.entries(programmingLanguages).map(([themeKey, themeLabel]) => (
            <option key={themeKey} value={themeKey}>{themeLabel}</option>
            ))}
        </select>

            <IoSettingsOutline />
        <select value={fontSize} onChange={handleFontChange}>
          {fontSizes.map((size) => (
            <option key={size } value={size}>{size+' px'}</option>
          ))}
        </select>

      </div>
      {/* <div id="container" style={{ height: '600px' }}></div> */}
      <MonacoEditor
      width="100%"
      height="600"
      language={language}
      theme={selectedTheme}
      options={editorOptions}
      editorDidMount={handleEditorDidMount}
    />
    </div>
  );
};

export default CodeEditor;
