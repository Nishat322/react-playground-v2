import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
//import App from './App'
//import App from './composition/App'
//import App from './messages/App'
//import App from './state/App'
//import App from './state-drills/App'
//import App from './demonymapp/App'
//import App from './paltrows-power-toes-setup/src/App'
import App from './lang-context/App'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
     <App/> 
  </BrowserRouter>
  , document.getElementById('root')
)
