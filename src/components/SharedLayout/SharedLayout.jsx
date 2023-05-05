import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Header, StyledLink, Nav } from './SharedLayout.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SharedLayout = () => {
  return (
    <>
      <Container style={{ minHeight: '100vh' }}>
        <Header>
          <Nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </Nav>
        </Header>
        <Outlet />
      </Container>
      <ToastContainer />
    </>
  );
};

export default SharedLayout;
