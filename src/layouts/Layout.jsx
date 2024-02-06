import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Container style={{ height: '100%' }}>
        <Box paddingTop="50px">
          <Outlet />
        </Box>
      </Container>
      <Box height="100px" bgcolor="#c2c2c2" />
    </>
  )
};

export default Layout;
