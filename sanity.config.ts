import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import { codeInput } from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'Sanity Next.js Portfolio',
  basePath: "/studio",
  projectId: 'wv7us4c0', 
  dataset: 'production',
  

  plugins: [deskTool(), codeInput({
    codeModes: [
      {
        name: 'angular',
        // dynamic import the angular package, and initialize the plugin after it is loaded
        // This way, the language is only when it is selected
        loader: () => import('@codemirror/lang-angular').then(({angular}) => angular()),
      },
    ],
  })],

  schema: {
    types: schemaTypes,
  },
})

// ga8lllhf

//wv7us4c0'