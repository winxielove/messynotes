import { useEffect, useState } from 'react'
import Ditto from './Components/Ditto'

function App() {  

  return (
    <div className="App">
      <div className='Header'>
        <h1 className='messynotes-title'>me<span>ss</span>ynotes</h1>
      </div>

      <Ditto />
    </div>
  )
}

export default App
