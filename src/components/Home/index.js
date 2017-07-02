
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router";
//import "./style.scss";
//import style from "bootstrap/dist/css/bootstrap.css";
//import * as bs from "react-bootstrap";
import { autobind } from "core-decorators";

import Header from '../Header';

import {
  testProp
} from "../../redux-store/project";


@connect(
  state => ({
    test:state.project.test
  }),
  {
    testProp
  }
)
export default class Home extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
      console.log(this.props);
  }


  render() {
    return (
      <div className="container">
        Home Site<br /> {this.props.test}
      </div>
    );
  }
}