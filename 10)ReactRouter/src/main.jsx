import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './context/PorductsContext.jsx'
import { CategoryProvider } from './context/CategoriesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
