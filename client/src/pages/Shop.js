import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
const Shop = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col>
          <TypeBar />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
export default Shop;
