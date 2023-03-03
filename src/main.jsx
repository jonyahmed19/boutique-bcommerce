import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import "./assets/css/glightbox.min.css"
// import "./assets/css/nouislider.min.css"
// import "./assets/css/swiper-bundle.min.css"
import "./assets/css/style.default.css"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
