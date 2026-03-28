import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../index";

const NavBar = () => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to="/">Shop</NavLink>
        <Nav className="ml-auto">
          <Button variant="outline-light">Login</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};
