

import React from 'react';
import SyntaxHighlighter  from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'; // Import the appropriate style

// RichTextComponents.tsx
import Refractor from "react-refractor";
// Load any languages you want to use from `refractor`
import js from "refractor/lang/javascript";
import typescript from "refractor/lang/typescript";
import tsx from "refractor/lang/tsx";

//You'll need to register the languages you want to use 
Refractor.registerLanguage(js);
Refractor.registerLanguage(typescript);
Refractor.registerLanguage(tsx);

interface CodeProps {
  value: {
    language: string;
    code: string;
  }
}


export const CustomComponents = {
  types: {
    code: ({ value }: CodeProps) => {
        return (
          <Refractor language={value.language} value={value.code} />
        );
    },
  },
}


