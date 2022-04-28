import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Global } from './styled/Global/Global.styled'
import { Home } from './Home'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <Global /> 
    <Home />
  </BrowserRouter>
)

