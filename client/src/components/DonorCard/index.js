import React from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import { DonorWrapper } from "./style";
// import "./style.css";

function DonorCard(props) {
  return (
    <Col>
      <DonorWrapper isSelected={props.isSelected} onClick={props.selectDonor}>
        <Card>
          <CardHeader>{props.businessName}</CardHeader>
          <CardBody>
            <p>Address: {props.businessAddress}</p>
            <p>Foods: {props.summary}</p>
          </CardBody>
        </Card>
      </DonorWrapper>
    </Col>
  );
}

export default DonorCard;
