import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {console.log("Hi there!\nSeems like you want to see how this portfolio was made.\nYou can find the source code here: https://github.com/JackHuynh0610/portfolio-website\nBy the way, don't judge me too much, I made this while learning React + Vite. :-)")}
    {console.log("Contact me through my personal email: huynhtrongnghia6102004@gmail.com")}
    <App />
  </React.StrictMode>,
)
