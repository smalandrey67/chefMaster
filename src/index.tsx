import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { Global } from 'assets/styled/Global.styled'

import { Home } from 'Home'
import { setupStore } from 'store/store'

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Global />
      <Home />
    </BrowserRouter>
  </Provider>
)
