import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TonConnectUIProvider } from "@tonconnect/ui-react";
const manifestUrl = 'https://tonpanda.com/wp-content/uploads/2024/10/tonconnect-manifest.json';
const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QueryClientProvider>
  </TonConnectUIProvider>,
)
