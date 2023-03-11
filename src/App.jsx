import { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { FiMoon, FiSun } from "react-icons/fi"
import Ditto from './Components/Ditto'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const switchDarkLight = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    // Accessing scss variable "--background-color"
    // and "--text-color" using plain JavaScript
    // and changing the same according to the state of "darkTheme"
    const root = document.documentElement
    root?.style.setProperty(
      "--bg-1",
      darkMode ? "rgb(28, 28, 28)" : "rgb(255, 252, 237)"
    )
    root?.style.setProperty(
      "--text-1",
      darkMode ? "rgb(255, 252, 237)" : "rgb(28, 28, 28)"
    )
    root?.style.setProperty(
      "--accent-3-light",
      darkMode ? "#866B3E" : "#F9E5C3"
    )
  }, [darkMode]);
  

  return (
    <div className="App">
      <div className='Header'>
        <h1 className='messynotes-title'>me<span>ss</span>ynotes</h1>
      </div>

      <Ditto />

      <div className='style-switcher' onClick={switchDarkLight}>
        <IconContext.Provider value={{size: "2rem"}}>
          {darkMode ? <FiMoon/> : <FiSun/>}
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default App
