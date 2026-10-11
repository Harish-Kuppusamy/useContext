import { useState } from 'react'

import './App.css'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import { createContext } from 'react'
import { useContext } from 'react'
import Panel from './Panel'
import Popup from './Popup'

//create context
const nameContext = createContext()
console.dir(nameContext);

//custom hook
export const useUserName = () => useContext(nameContext)

function App() {
  const [name, setName] = useState("xyz")
  function abc() {
    console.log("hello")
  }
  return (
    <>
      <nameContext.Provider value={{ name, setName }}>
        <Panel />
        <Popup />
      </nameContext.Provider>
      <Sidebar />
      <Dashboard />
    </>
  )
}
export default App
