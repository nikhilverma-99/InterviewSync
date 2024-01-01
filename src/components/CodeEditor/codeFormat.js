// CodeFormatter.js

import prettier from 'prettier';

const formatCode = (code) => {
  try {
    return prettier.format(code, {
      parser: 'javascript', // Change this based on your code language
      semi: false,
      singleQuote: true,
    });
  } catch (error) {
    console.error('Error formatting code:', error);
    return code;
  }
};

export default formatCode;
