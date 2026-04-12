import { observer } from "mobx-react-lite";
import React from "react";
import { Context } from "../index";
import { Card, Row, Col } from "react-bootstrap";
import { useContext } from "react";
const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex gap-2">
      {device.brands.map((brand) => (
        <Col md="auto" key={brand.id}>
          <Card
            style={{ cursor: "pointer" }}
            className="p-3"
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand.id ? "danger" : "light"}
          >
            {brand.name}
          </Card>
        </Col>
      ))}
    </Row>
  );
});

export default BrandBar;
