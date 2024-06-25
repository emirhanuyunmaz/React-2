import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CountPovider } from './CountContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CountPovider>
      <App />

      </CountPovider>
  </React.StrictMode>,
)
