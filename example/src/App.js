import React from 'react'
import { FullscreenMenu } from 'react-fullscreen-menu'
import 'react-fullscreen-menu/dist/index.css'
import { dataMenu } from './api/model'

const App = () => {
  return <FullscreenMenu data={dataMenu} position='right' colorIcon='black' />
}

export default App
