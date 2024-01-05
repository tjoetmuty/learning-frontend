import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Reactrouter from './Reactrouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/articles">Article</Link></li>
        </ul>
    </nav>
    {/* <App /> */}
    <Reactrouter/>
    </BrowserRouter>
  </React.StrictMode>,
)
