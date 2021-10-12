import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import { AuthProvider } from './hooks/auth';

import { Routes } from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
        <Routes />
      {/* </AuthProvider> */}
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
