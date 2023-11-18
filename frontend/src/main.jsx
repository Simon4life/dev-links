import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';
import { UserProvider } from './context/user_context.jsx';
import { LinksProvider } from './context/links_context.jsx';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <LinksProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </LinksProvider>
    </UserProvider>
  </React.StrictMode>
);
