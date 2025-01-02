import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@src/App.tsx';
import 'animate.css';
import "@src/style.scss";
import "@src/responsive.scss";
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    </Provider>
  </StrictMode>,
)
