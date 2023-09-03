

import React from 'react';
import SyntaxHighlighter  from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'; // Import the appropriate style

interface CodeProps {
  value: {
    language: string;
    code: string;
  }
}

export const codeComponent: React.FC<CodeProps>= ({ value} ) => { 
  return (<SyntaxHighlighter 
     language={value.language} style={nightOwl}> 
    {value.code}
  </SyntaxHighlighter>)}




export const customBlockComponents = {
  types: {
    code: codeComponent
  }
}

