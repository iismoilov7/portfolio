import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@src/App.tsx';
import "@src/style.scss";
import "@src/responsive.scss";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)