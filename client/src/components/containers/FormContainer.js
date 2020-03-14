import React, { Component } from "react";
import SingleInput from "../SingleInput";
import "../../App.css";
import { Button } from "reactstrap";
import axios from "axios";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerName: "",
      businessName: "",
      businessAddress: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handleBusinessNameChange = this.handleBusinessNameChange.bind(this);
    this.handleBusinessAddressChange = this.handleBusinessAddressChange.bind(
      this
    );
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
  }
  componentDidMount() {
    fetch("./fake_db.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          ownerName: data.ownerName,
          businessName: data.businessName,
          businessAddress: data.businessAddress,
          summary: data.summary
        });
      });
  }
  handleFullNameChange(e) {
    this.setState({ ownerName: e.target.value }, () =>
      console.log("name:", this.state.ownerName)
    );
  }
  handleBusinessNameChange(e) {
    this.setState({ businessName: e.target.value }, () =>
      console.log("business name:", this.state.businessName)
    );
  }
  handleBusinessAddressChange(e) {
    this.setState({ businessAddress: e.target.value }, () =>
      console.log("business address:", this.state.businessAddress)
    );
  }
  handleSummaryChange(e) {
    this.setState({ summary: e.target.value }, () => {
      console.log("summary", this.state.summary);
    });
  }
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      ownerName: "",
      businessName: "",
      businessAddress: "",
      summary: ""
    });
  }
  handleFormSubmit(e) {
    e.preventDefault();

    const formPayload = {
      ownerName: this.state.ownerName,
      businessName: this.state.businessName,
      businessAddress: this.state.businessAddress,
      summary: this.state.summary
    };

    console.log(formPayload);
    axios.post("/api/donor", formPayload);
    // .then(function(response) {
    //   console.log(response);
    // })
    // .catch(function(error) {
    //   console.log(error);
    // });

    console.log("Send this in a POST request:", formPayload);
    this.handleClearForm(e);
  }
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <h5>Food Donation Form</h5>
        <SingleInput
          inputType={"text"}
          // title={"Contact Name"}
          name={"ownerName"}
          controlFunc={this.handleFullNameChange}
          content={this.state.ownerName}
          placeholder={"first and last name"}
          className="inputArea"
        />
        <SingleInput
          inputType={"text"}
          // title={"Non-Profit Name"}
          name={"business"}
          controlFunc={this.handleBusinessNameChange}
          content={this.state.businessName}
          placeholder={"Non-Profit name"}
        />
        <SingleInput
          inputType={"text"}
          // title={"Non-Profit Address"}
          name={"businessAddress"}
          controlFunc={this.handleBusinessAddressChange}
          content={this.state.businessAddress}
          placeholder={"Non-Profit address"}
        />
        <SingleInput
          inputType={"text"}
          name={"summary"}
          controlFunc={this.handleSummaryChange}
          content={this.state.summary}
          placeholder={"Summary of what foods you would be donating"}
        />
        <input
          type="submit"
          className="btn btn-primary float-right"
          value="Submit"
        />
        <button
          className="btn btn-link float-left"
          onClick={this.handleClearForm}
        >
          Clear form
        </button>
      </form>
    );
  }
}

export default FormContainer;
