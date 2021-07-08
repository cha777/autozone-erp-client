import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { createAppTheme } from './theme';
import GlobalStyles from './components/GlobalStyles';
import routes from './routes';

const App = () => {
  const content = useRoutes(routes);

  const theme = createAppTheme({
    responsiveFontSizes: true,
    roundedCorners: true,
    theme: 'DARK',
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {content}
    </ThemeProvider>
  );
};

export default App;
