import { ReactNode, useState } from 'react';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Outlet } from 'react-router';
import NavBar from './NavBar';
import SideBar from './SideBar';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',
  width: '100vw',
}));

const MainLayoutWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: '64px',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: '280px',
  },
}));

const MainLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
});

const MainLayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
  position: 'relative',
  WebkitOverflowScrolling: 'touch',
});

const MainLayout = (props: MainLayoutProps) => {
  const [isSideBarMobileOpen, setIsSideBarMobileOpen] = useState(false);

  return (
    <MainLayoutRoot>
      <NavBar onSideBarMobileOpen={() => setIsSideBarMobileOpen(true)} />
      <SideBar
        onMobileClose={() => setIsSideBarMobileOpen(false)}
        openMobile={isSideBarMobileOpen}
      />
      <MainLayoutWrapper>
        <MainLayoutContainer>
          <MainLayoutContent>
            <Outlet />
          </MainLayoutContent>
        </MainLayoutContainer>
      </MainLayoutWrapper>
    </MainLayoutRoot>
  );
};

export default MainLayout;
