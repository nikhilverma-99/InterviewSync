const fontSizes= [12,13,14,15,16,17,18,20,21]
const tabSizes= [2,4,6,8] 
const themes= {
    'vs-dark': 'Dark Theme',
    'vs-light': 'Light Theme',
    'monokai': 'Monokai Theme',
  };
//   const programmingLanguages = {
//     'javascript': 'JavaScript',
//     'python': 'Python',
//     'java': 'Java',
//     'csharp': 'C# (C Sharp)',
//     'cpp': 'C++',
// };
 const programmingLanguages = [
  {
    id: 63,
    name: "JavaScript (Node.js 12.14.0)",
    label: "JavaScript (Node.js 12.14.0)",
    value: "javascript",
  },

  {
    id: 76,
    name: "C++ (Clang 7.0.1)",
    label: "C++ (Clang 7.0.1)",
    value: "cpp",
  },
  {
    id: 51,
    name: "C# (Mono 6.6.0.161)",
    label: "C# (Mono 6.6.0.161)",
    value: "csharp",
  },
  {
    id: 62,
    name: "Java (OpenJDK 13.0.1)",
    label: "Java (OpenJDK 13.0.1)",
    value: "java",
  },

  {
    id: 71,
    name: "Python (3.8.1)",
    label: "Python (3.8.1)",
    value: "python",
  },
]


export {fontSizes, tabSizes, themes, programmingLanguages};