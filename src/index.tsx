import 'react-perfect-scrollbar/dist/css/styles.css';
import 'nprogress/nprogress.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';

import App from './App';

ReactDOM.render(
  <StrictMode>
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StyledEngineProvider>
    </HelmetProvider>
  </StrictMode>,
  document.getElementById('root')
);
