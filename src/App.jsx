import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ContextApi from './Components/ContextApi/Context'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ContextApi />
      </BrowserRouter>
    </>
  )
}

export default App