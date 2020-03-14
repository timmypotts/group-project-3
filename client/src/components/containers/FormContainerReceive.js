import React, { Component } from "react";
import SingleInput from "../SingleInput";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";

class FormContainerReceive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      charityName: "",
      charityAddress: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handleCharityNameChange = this.handleCharityNameChange.bind(this);
    this.handleCharityAddressChange = this.handleCharityAddressChange.bind(
      this
    );
  }
  componentDidMount() {
    fetch("./fake_db.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          ownerName: data.ownerName,
          charityName: data.charityName,
          charityAddress: data.charityAddress
        });
      });
  }
  handleFullNameChange(e) {
    this.setState({ ownerName: e.target.value }, () =>
      console.log("name:", this.state.ownerName)
    );
  }
  handleCharityNameChange(e) {
    this.setState({ charityName: e.target.value }, () =>
      console.log("charity name:", this.state.charityName)
    );
  }
  handleCharityAddressChange(e) {
    this.setState({ charityAddress: e.target.value }, () =>
      console.log("charity address:", this.state.charityAddress)
    );
  }
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      ownerName: "",
      charityName: "",
      charityAddress: ""
    });
  }
  handleFormSubmit(e) {
    e.preventDefault();

    const formPayload = {
      ownerName: this.state.ownerName,
      charityName: this.state.charityName,
      charityAddress: this.state.charityAddress
    };

    axios.post("/api/donee", formPayload);

    console.log("Send this in a POST request:", formPayload);
    this.handleClearForm(e);
  }
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <h5>Food Donation Form</h5>
        <SingleInput
          inputType={"text"}
          title={"Contact Name"}
          name={"name"}
          controlFunc={this.handleFullNameChange}
          content={this.state.ownerName}
          placeholder={"Type first and last name here"}
        />
        <SingleInput
          inputType={"text"}
          title={"Non-Profit Name"}
          name={"charity"}
          controlFunc={this.handleCharityNameChange}
          content={this.state.charityName}
          placeholder={"Type charity name here"}
        />
        <SingleInput
          inputType={"text"}
          title={"Non-profit Address"}
          name={"charityAddress"}
          controlFunc={this.handleCharityAddressChange}
          content={this.state.charityAddress}
          placeholder={"Type charity address here"}
        />
        <Link
          className="nav-link Donations"
          to="/donations"
          type="submit"
          className="btn btn-primary float-center"
          value="Submit"
        >
          Submit
        </Link>
        <br />
        <br />
        <br />
      </form>
    );
  }
}

export default FormContainerReceive;
