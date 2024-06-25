import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PersonProvider } from './context/PersonsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonProvider>
      <App />
    </PersonProvider>
  </React.StrictMode>
)
