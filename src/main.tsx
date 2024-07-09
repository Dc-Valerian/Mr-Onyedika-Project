import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Store } from './Components/Global/Store.tsx'
import { Provider } from 'react-redux'

import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Provider store={Store}>
    <QueryClientProvider client={queryClient}>
      <App/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
   </Provider>
  </React.StrictMode>,
)
