import React, { useState, useRef, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor'; 
import { HiOutlineCodeBracket } from "react-icons/hi2";
import './Editor.css'
const CodeEditor = () => {
  const [fontSize, setFontSize] = useState(14);
  const [tabSize, setTabSize] = useState(2); 
  const [output,setOutput] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('vs-dark'); // Default theme

  const editorRef = useRef(null);

  const editorOptions = {
    selectOnLineNumbers: true,
    fontSize,
    tabSize,
  };

   
  useEffect(() => {
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false,
    });
    
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES5,
      allowNonTsExtensions: true,
    });
    monaco.languages.typescript.javascriptDefaults.addExtraLib([
      'declare module "*.json" {\n  const value: any;\n  export default value;\n}',
    ].join('\n'), 'filename/tsconfig.json');
  }, []);

  const handleCopyCode = () => {
    if (editorRef.current) {
      const code = editorRef.current.getValue();
      navigator.clipboard.writeText(code);
      console.log(code)
    }
  },[];

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;

    // Store the editor instance and get the initial code
    editor.getModel().onDidChangeContent(() => {
      // setCode(editor.getValue());
    }); 
  };

  const handleFormatCode = () => {
    // Check if the editor instance exists
    console.log("Format")
    if (editorRef.current) {
      // Get the current model
      const model = editorRef.current.getModel();

      if (model) {
        // Get the entire text of the model
        const text = model.getValue();

        // Get formatted text using Monaco's formatter
        monaco.editor.getAction('editor.action.formatDocument').run();

        // Note: 'editor.action.formatDocument' is just a common identifier; make sure it matches your Monaco Editor version.

        // Replace the entire content with the formatted text
        editorRef.current.executeEdits('format', [
          {
            range: model.getFullModelRange(),
            text: text,  // If you want to replace the text with the formatted version
          },
        ]);
      }
    }
  };
  const handleThemeChange = (event) => {
    console.log(event.target.value)
    setSelectedTheme(event.target.value);
  };

  return (
    <div>
      <div className='editor-top1'>
        <HiOutlineCodeBracket className='code-icon'/><span> Code</span> 
      </div>
      <div>
        <label>
          Font Size:
          <input
            type="number"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
          />
        </label>
        <label>
          Tab Size:
          <input
            type="number"
            value={tabSize}
            onChange={(e) => setTabSize(Number(e.target.value))}
          />
        </label>
        <label>
          Theme:
          <select value={selectedTheme} onChange={handleThemeChange}>
            <option value="vs-dark">Dark</option>
            <option value="vs-light">Light</option>
            <option value="Monokai">Monokai</option>

          </select>
        </label>
      </div>
      <MonacoEditor
        // width="800"
        height="80vh"
        language="javascript"
        theme={selectedTheme}
        options={editorOptions}
        editorDidMount={handleEditorDidMount}
      />
      <button onClick={handleCopyCode}>Copy Code</button> 
      <a className='btn btn-RunCode' onClick={handleCopyCode}>Run </a> 
      <a className='btn btn-RunCode' onClick={handleFormatCode}>Format </a> 
      

    </div>
  );
};

export default CodeEditor;
