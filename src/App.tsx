import { ThemeProvider } from '@material-ui/core';
import { createAppTheme } from './theme';
import GlobalStyles from './components/GlobalStyles';

const App = () => {
  const theme = createAppTheme({
    responsiveFontSizes: true,
    roundedCorners: true,
    theme: 'DARK',
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
