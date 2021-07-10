import type { ReactNode } from 'react';
import { Box, Container } from '@material-ui/core';
import useSettings from '../hooks/useSettings';

interface OutletContainerProps {
  children: ReactNode;
}

const OutletContainer = (props: OutletContainerProps) => {
  const { children } = props;
  const { settings } = useSettings();

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3,
      }}
    >
      <Container maxWidth={settings.compact ? 'xl' : false}>
        {children}
      </Container>
    </Box>
  );
};

export default OutletContainer;
