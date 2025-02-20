import { useState } from 'react'
import "./index.css"
// import "./app.css"
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/HomePage/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
