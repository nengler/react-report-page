import React, { Component } from "react";
import axios from "axios";
import Header from "./header";

class category extends Component {
  constructor() {
    super();
    this.state = {
      headers: {}
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/api/v1/report_page`, {
        headers: { "Access-Control-Allow-Origin": true, crossorigin: true }
      })
      .then(res => {
        console.log(res);
        this.setState({ headers: res.data.data });
        console.log(this.state.headers);
      });
  }
  /*
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
*/
  itemLoad = () => {
    /*
    console.log(this.state.headers);
    if (Object.keys(this.state.headers).length === 0) {
      console.log("null baby");
      return <div>hello world</div>;
    } else {
      console.log(Object.keys(this.state.headers)[0]);
      console.log(this.state.headers["first category"]);
      Object.values(this.state.headers).map(function(value) {
        console.log(value);
        value.map(l => console.log(l));
      });
      Object.keys(this.state.headers).map(function(key) {
        console.log(key);
        let ll = `"${key}"`;
        console.log(ll);
        console.log(this.state.headers[ll]);
        return <div>Key: {key}, Value: </div>;
      });
    }*/
    let i = 0;
    return Object.values(this.state.headers).map(function(value) {
      console.log(value);
      <Header header={value} />;
    });
  };

  render() {
    return (
      /*this.state.headers.map(header => (
      <Header key={header.id} header={header} />
    ));*/
      /*Object.entries(this.state.headers).map(([key, value]) => {
        <Header key={key} header={value} />;
      })*/
      /*
      Object.keys(this.state.headers).map(function(key) {
        <Header key={key} header={this.state.headers[key]} />;
      })
      */

      <div>{this.itemLoad()}</div>
    );
  }
}
export default category;
