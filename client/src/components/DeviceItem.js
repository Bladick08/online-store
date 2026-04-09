import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from "../assets/star.png.svg";
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
const DeviceItem = ({ device }) => {
  const history = useHistory();
  return (
    <Col
      md={3}
      className={"mt-3"}
      onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card style={{ wight: 150, cursor: "pointer" }} border={"light"}>
        <Image wight={150} height={150} src={device.img} />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-item-center">
          <div>Samsung...</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={20} height={20} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};
export default DeviceItem;
