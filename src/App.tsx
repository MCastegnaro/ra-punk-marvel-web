import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
