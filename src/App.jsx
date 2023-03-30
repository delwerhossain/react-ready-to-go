import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      <button className='btn'>hi daisy</button>
      <div className="mockup-phone border-primary">
  <div className="camera"></div> 
  <div className="display">
    <div className="artboard artboard-demo phone-1">Hi.</div>
  </div>
</div>
    </div>
  )
}

export default App
