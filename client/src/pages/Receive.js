import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FormContainerReceive from "../components/containers/FormContainerReceive";

function Receive() {
  return (
    <>
      <NavBar />
      <Header />
      <h1>Receive Page</h1>
      <FormContainerReceive />
      <Footer />
    </>
  );
}

export default Receive;
