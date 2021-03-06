import React, { Component } from "react";
import { Container } from "reactstrap";
import { NavMenu } from "./NavMenu";
import "./Layout.css";
import Footer from "./Footer";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className="paralax hackingfootersin2019">
        <NavMenu />
        <Container>{this.props.children}</Container>
        <Footer />
      </div>
    );
  }
}
