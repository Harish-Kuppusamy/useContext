import React from 'react'
import { useUserName } from './App'

function Popup() {
    //use the custom hook to access the context values
    const { name, setName } = useUserName()
  return (
      <>
          <h1>Popup {name}</h1>
      </>
  )
}

export default Popup