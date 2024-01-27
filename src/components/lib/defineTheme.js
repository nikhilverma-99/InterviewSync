import { loader } from "@monaco-editor/react";
import Cobalt from 'monaco-themes/themes/Cobalt.json' 
const defineTheme = (theme) => {
  return new Promise((res) => {
    Promise.all([
      loader.init(),
      Cobalt,
    ]).then(([monaco, themeData]) => {
      monaco.editor.defineTheme(theme, themeData);
      res();
    });
  });
};

export { defineTheme };
