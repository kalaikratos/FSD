import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Search from './Search'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Search/>
  </React.StrictMode>,
)
