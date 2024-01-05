import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Reactrouter from './Reactrouter.jsx'
import { Navbar } from './Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    {/* <App /> */}
    <Reactrouter/>
    </BrowserRouter>
  </React.StrictMode>
)
