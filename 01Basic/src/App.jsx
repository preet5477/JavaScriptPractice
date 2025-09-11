import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('')

  const submitHandler = ()=>{
    console.log(Sumbitted)
    }
  return (
    <>
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input
        value={username}
         placeholder='Write Here'
         onChange={(e)=>{
          setUsername(e.target.value)
         }}
         ></input>

         <button >Submit</button>
      </form>


    </div>
      
    </>
  )
}

export default App
