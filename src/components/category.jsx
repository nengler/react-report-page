import React, { Component } from "react";
import axios from "axios";
import Header from "./header";

class category extends Component {
  constructor() {
    super();
    this.state = {
      headers: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/api/v1/categories`, {
        headers: { "Access-Control-Allow-Origin": true, crossorigin: true }
      })
      .then(res => {
        console.log(res);
        this.setState({ headers: res.data.data });
      });
  }

  render() {
    return (
      <div>
        {this.state.headers.map(header => (
          <Header key={header.id} header={header} />
        ))}
      </div>
    );
  }
}
export default category;
