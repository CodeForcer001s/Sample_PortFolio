import { useState } from 'react'
import "./index.css"
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/HomePage/Home'
import Tech from './Components/About/Tech'
import { createBrowserRouter,Outlet, RouterProvider } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const Layout=()=>(
    <div className="container">
      <Navbar/>
      <Outlet/>
    </div>
  )

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {path:'/',element:<Home/>},
        {path:'/tech',element:<Tech/>},
      ]
    },
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
