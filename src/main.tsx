import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'src/App'
import 'src/i18n/i18n'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import { ConfigProvider } from 'antd'
import { theme } from './constants/antdConfig'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
)
