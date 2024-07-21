import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">LoginApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Study" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/program">Program</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/course">Course</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">Login</Nav.Link>
            {/*<Nav.Link href="#" disabled>*/}
            {/*  Link*/}
            {/*</Nav.Link>*/}
          </Nav>
          {/*<Form className="d-flex">*/}
          {/*  <Form.Control*/}
          {/*    type="search"*/}
          {/*    placeholder="Search"*/}
          {/*    className="me-2"*/}
          {/*    aria-label="Search"*/}
          {/*  />*/}
          {/*  <Button variant="outline-success">Search</Button>*/}
          {/*</Form>*/}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;