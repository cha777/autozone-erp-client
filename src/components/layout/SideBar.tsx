import { useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Avatar,
  Box,
  // Button,
  Divider,
  Drawer,
  Typography,
  // Link,
  // Typography,
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ChartSquareBarIcon from '../../icons/ChartSquareBar';
import FolderOpenIcon from '../../icons/FolderOpen';
import ShoppingCartIcon from '../../icons/ShoppingCart';
import UsersIcon from '../../icons/Users';
import Logo from '../Logo';
import NavSection from './navigation/NavSection';
import Scrollbar from '../Scrollbar';

interface SideBarProps {
  onMobileClose: () => void;
  openMobile: boolean;
}

const sections = [
  {
    title: 'General',
    items: [
      {
        title: 'Overview',
        path: '/',
        icon: <ChartSquareBarIcon fontSize="small" />,
      },
    ],
  },
  {
    title: 'Management',
    items: [
      {
        title: 'Users',
        icon: <UsersIcon fontSize="small" />,
        children: [
          {
            title: 'Employees',
            path: '/employees',
          },
          {
            title: 'Customers',
            path: '/customers',
          },
          {
            title: 'Suppliers',
            path: '/suppliers',
          },
        ],
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <ShoppingCartIcon fontSize="small" />,
        children: [
          {
            title: 'List',
            path: '/dashboard/products',
          },
          {
            title: 'Create',
            path: '/dashboard/products/new',
          },
        ],
      },
      {
        title: 'Orders',
        icon: <FolderOpenIcon fontSize="small" />,
        path: '/dashboard/orders',
        children: [
          {
            title: 'List',
            path: '/dashboard/orders',
          },
          {
            title: 'Details',
            path: '/dashboard/orders/1',
          },
        ],
      },
      {
        title: 'Invoices',
        path: '/dashboard/invoices',
        icon: <ReceiptIcon fontSize="small" />,
        children: [
          {
            title: 'List',
            path: '/dashboard/invoices',
          },
          {
            title: 'Details',
            path: '/dashboard/invoices/1',
          },
        ],
      },
    ],
  },
];

const SideBar = (props: SideBarProps) => {
  const theme = useTheme();
  const isStaticSideBar = useMediaQuery(theme.breakpoints.up('lg'));

  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  const user = {
    name: 'Chathuranga',
    role: 'Admin',
    avatar: '',
  };

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Scrollbar options={{ suppressScrollX: true }}>
        {!isStaticSideBar && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              p: 2,
            }}
          >
            <RouterLink to="/">
              <Logo
                sx={{
                  height: 40,
                  width: 40,
                }}
              />
            </RouterLink>
          </Box>
        )}
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'background.default',
              borderRadius: 1,
              display: 'flex',
              overflow: 'hidden',
              p: 2,
            }}
          >
            <RouterLink to="/dashboard/account">
              <Avatar
                src={user.avatar}
                sx={{
                  cursor: 'pointer',
                  height: 48,
                  width: 48,
                }}
              />
            </RouterLink>
            <Box sx={{ ml: 2 }}>
              <Typography color="textPrimary" variant="subtitle2">
                {user.name}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {user.role}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              sx={{
                '& + &': {
                  mt: 3,
                },
              }}
              {...section}
            />
          ))}
        </Box>
      </Scrollbar>
    </Box>
  );

  return (
    <>
      {isStaticSideBar ? (
        <Drawer
          anchor="left"
          open
          PaperProps={{
            sx: {
              backgroundColor: 'background.paper',
              height: 'calc(100% - 64px) !important',
              top: '64px !Important',
              width: 280,
            },
          }}
          variant="persistent"
        >
          {content}
        </Drawer>
      ) : (
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          PaperProps={{
            sx: {
              backgroundColor: 'background.paper',
              width: 280,
            },
          }}
          variant="temporary"
        >
          {content}
        </Drawer>
      )}
    </>
  );
};

export default SideBar;
