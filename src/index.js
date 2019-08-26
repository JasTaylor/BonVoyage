import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
import App from './components/App/App'
import { HashRouter } from 'react-router-dom'

const appJsx = (
  <HashRouter>
    <App />
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
