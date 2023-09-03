import { PortableText } from "@portabletext/react"
import React from 'react';
import SyntaxHighlighter  from 'react-syntax-highlighter';
// import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'; // Import the appropriate style

interface CodeProps {
  value: {
    language: string;
    code: string;
  };
}

const Code = (props: any) => {

  const customBlockComponents = {
    types: {
      code: ({ value } : any) => {
        console.log(value)
        return (
          <p>{value.code}</p>
          // <SyntaxHighlighter language={props.value.language}  wrapLongLines={true}>
          //   {props.value.code}
          // </SyntaxHighlighter>
        );
      }
    }
  }

  return <PortableText
  value={[props]}
  components={customBlockComponents}
  />
}

export default Code 
