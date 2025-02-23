import { useState } from 'react'
import "./index.css"
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/HomePage/Home'
import Tech from './Components/About/Tech'
import { createBrowserRouter,Outlet, RouterProvider } from 'react-router-dom'
import About from './Components/Tech/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contacts/Contact'

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
        {path:'/about',element:<About/>},
        {path:'/projects',element:<Projects/>},
        {path:'/contacts',element:<Contact/>}
      ]
    },
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
