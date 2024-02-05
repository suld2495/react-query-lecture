import ReactDOM from 'react-dom/client'
import QueryClientProvider from './components/provider/QueryClientProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.jsx'

import './styles/reset.css'
import './index.css'

const enableMocking = async () => {
  if (import.meta.env.MODE !== 'development') {
    return
  }
 
  const { worker } = await import('./mocks/browser.js');
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  )
})
