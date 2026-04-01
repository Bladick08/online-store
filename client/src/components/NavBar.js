import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { Context } from "../index";
import { SHOP_ROUTE } from "../utils/consts";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          TeleStore
        </NavLink>
        {user.isAuth ? (
          <Nav
            className="ms-auto d-flex align-items-center gap-2"
            style={{ color: "white" }}
          >
            <Button variant={"outline-light"} className="">
              login
            </Button>
            <Button variant={"outline-light"}>Administration</Button>
          </Nav>
        ) : (
          <Nav
            className="ms-auto d-flex align-items-center gap-2"
            style={{ color: "white" }}
          >
            <Button
              variant={"outline-light"}
              onClick={() => user.setIsAuth(true)}
            >
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
