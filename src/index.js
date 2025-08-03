import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrandProvider } from './context/BrandContext';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

// Set up Apollo Client
const client = new ApolloClient({
  uri: 'https://graphql-api-brown.vercel.app/api/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
    <ApolloProvider client={client}>
      <BrandProvider>
        <App />
      </BrandProvider>
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
