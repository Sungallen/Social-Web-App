import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'App'
import 'index.css'
import reportWebVitals from 'reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { initMockServiceWorker } from 'test/msw'

import Env from 'config/env'
import makeApi from 'lib/apiConfiguration'
import { IGroupCardProps } from 'features/types/group.types'

initMockServiceWorker()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
