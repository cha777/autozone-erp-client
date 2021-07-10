import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { createAppTheme } from './theme';
import GlobalStyles from './components/GlobalStyles';
import SplashScreen from './components/SplashScreen';
import useSettings from './hooks/useSettings';
import useScrollReset from './hooks/useScrollReset';
import useAuth from './hooks/useAuth';
import routes from './routes';

const App = () => {
  const content = useRoutes(routes);
  const { settings } = useSettings();
  const auth = useAuth();

  useScrollReset();

  const theme = createAppTheme({
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: true,
    theme: settings.theme,
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {auth.isInitialized ? content : <SplashScreen />}
    </ThemeProvider>
  );
};

export default App;
