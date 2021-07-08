import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';

import App from './App';

ReactDOM.render(
  <StrictMode>
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </HelmetProvider>
  </StrictMode>,
  document.getElementById('root')
);
