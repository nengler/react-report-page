import React, { Component } from "react";
import Item from "./item";
import "../css/header.css";
import axios from "axios";

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.header.name,
      id: props.header.id,
      items: [],
      open: false
    };
  }

  handleHeaderClick = categoryId => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
    if (this.state.items.length === 0) {
      axios
        .post(
          `http://localhost:3000/api/v1/category_items`,
          {
            headers: {
              "Access-Control-Allow-Origin": true,
              crossorigin: true,
              "Content-Type": "application/json"
            }
          },
          {
            data: { category_id: categoryId }
          }
        )
        .then(res => {
          this.setState({ items: res.data.data });
        });
    }
  };

  ItemList = () => {
    if (this.state.open && this.state.items.length > 0) {
      return (
        <div className="table_holder">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Last Updated</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map(item => (
                <Item key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="section">
        <div
          className="jumbotron-mini text-center"
          onClick={() => this.handleHeaderClick(this.state.id)}
        >
          <span>
            <h2>{this.state.name}</h2>
          </span>
        </div>
        {this.ItemList()}
      </div>
    );
  }
}

export default header;
