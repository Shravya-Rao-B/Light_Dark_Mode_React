import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";

function App() {
  const [darkMode, setDrakMode] = useState(false)

  function switchToDark(){
    setDrakMode(prevState => !prevState)
  }

  return (
    <div className="App">
      <Navbar darkMode={darkMode} switchToDark={switchToDark}/>
      <Main darkMode={darkMode}/>
    </div>
  )
}

export default App
