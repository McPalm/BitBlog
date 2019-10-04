import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";
import { Test } from "./components/Test";
import BlogRoll from "./components/BlogRoll";
import About from "./components/About";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/fetch-data" component={FetchData} />
        <Route path="/test-component" component={Test} />
        <Route path="/blog" component={BlogRoll} />
        <Route path="/about" component={About} />
      </Layout>
    );
  }
}
