import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from '@/context/theme-provider.tsx';
import { ActiveSectionProvider } from './context/section-provider.tsx';
import './index.css';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ActiveSectionProvider>
        <Toaster position="top-center" />
        <App />
      </ActiveSectionProvider>
    </ThemeProvider>
  </React.StrictMode>
);
