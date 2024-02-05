import ReactDOM from 'react-dom/client'
import './index.css'
import QueryClientProvider from './components/provider/QueryClientProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.js'

const enableMocking = async () => {
  if (import.meta.env.MODE !== 'development') {
    return
  }
 
  const { worker } = await import('./mocks/browser');
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  )
})
