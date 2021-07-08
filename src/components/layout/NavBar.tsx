import { Link as RouterLink } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { AppBar, Box, IconButton, Toolbar } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import type { AppBarProps } from '@material-ui/core';
import MenuIcon from '../../icons/Menu';
import Logo from '../Logo';
import ContentSearch from './ContentSearch';

interface NavBarProps extends AppBarProps {
  onSideBarMobileOpen?: () => void;
}

const NavBarRoot = experimentalStyled(AppBar)(({ theme }) => ({
  ...(theme.palette.mode === 'light' && {
    backgroundColor: theme.palette.primary.main,
    boxShadow: 'none',
    color: theme.palette.primary.contrastText,
  }),
  ...(theme.palette.mode === 'dark' && {
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: 'none',
  }),
  zIndex: theme.zIndex.drawer + 100,
}));

const NavBar = (props: NavBarProps) => {
  const theme = useTheme();
  const showMenuIcon = useMediaQuery(theme.breakpoints.down('lg'));

  const { onSideBarMobileOpen, ...other } = props;

  return (
    <NavBarRoot {...other}>
      <Toolbar sx={{ minHeight: 64 }}>
        {showMenuIcon ? (
          <IconButton color="inherit" onClick={onSideBarMobileOpen}>
            <MenuIcon fontSize="small" />
          </IconButton>
        ) : (
          <RouterLink to="/">
            <Logo
              sx={{
                height: 40,
                width: 40,
              }}
            />
          </RouterLink>
        )}
        <Box
          sx={{
            flexGrow: 1,
            ml: 2,
          }}
        />
        <Box sx={{ ml: 1 }}>
          <ContentSearch />
        </Box>
      </Toolbar>
    </NavBarRoot>
  );
};

export default NavBar;
