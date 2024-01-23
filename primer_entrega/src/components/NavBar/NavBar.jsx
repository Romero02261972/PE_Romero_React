import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from '../CarWidget/CarWidget';
import Logo from '../Logo/Logo';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#logo"><Logo/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Nous">Nosotros</Nav.Link>
            <Nav.Link href="#Products">Productos</Nav.Link>
            <Nav.Link href="#Activities">Actividades</Nav.Link>
            <Nav.Link href="#Buy"><CarWidget/></Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      </>
  );
}
export default NavBar;