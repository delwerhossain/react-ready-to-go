import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='text-5xl text-red-600'>tailwinds  working</h1>
      <button className='btn'>daisy working</button>
    </div>
  )
}

export default App
