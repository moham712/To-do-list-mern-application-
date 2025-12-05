import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Import Bootstrap JS
import './index.css'
import {Provider} from "react-redux"
import { store } from './store/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
