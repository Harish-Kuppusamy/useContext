import React from 'react'
import { useUserName } from './App';


function Panel() {
    //use the custom hook to access the context values
    const {name, setName} = useUserName()
    console.log(name);
  return (
      <>
          <div>Panel {name}</div>
          <button onClick={() => setName("Alice")}>Change Name</button>
      </>
  )
}

export default Panel