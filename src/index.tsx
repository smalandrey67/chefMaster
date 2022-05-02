import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Global } from './styled/Global/Global.styled'
import { Home } from './Home'
import { setupStore } from './store'

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <Global />
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>
)

