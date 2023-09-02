import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity Next.js Portfolio',
  basePath: "/studio",
  projectId: 'wv7us4c0', 
  dataset: 'production',
  

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})

// ga8lllhf

//wv7us4c0'