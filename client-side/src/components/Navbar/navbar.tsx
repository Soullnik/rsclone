import * as React from "react";
import { Component } from "react";
import { Button } from "antd";
import { Layout } from "antd";

const { Header } = Layout;

export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export default class Navbar extends Component<HelloWorldProps> {

  render() {
    return (
      <Header>
        <Button>Hi {this.props.userName} from React! Welcome to {this.props.lang}!</Button>
      </Header>
    );
  }
}
