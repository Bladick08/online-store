import React from "react";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log(location);
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Login" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Enter your email..." />
          <Form.Control
            className="mt-3"
            placeholder="Enter your password..."
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Don't have an account?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Registration!</NavLink>
              </div>
            ) : (
              <div>
                Do you have an account?{" "}
                <NavLink to={LOGIN_ROUTE}>Login!</NavLink>
              </div>
            )}
            <Button variant={"secondary"}>
              {isLogin ? "Login" : "Registration"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};
export default Auth;
