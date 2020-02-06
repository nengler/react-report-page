import React, { Component } from "react";
import Header from "./header";
import { connect } from "react-redux";

class category extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.categoryInfo);
    console.log(this.props);
    this.state = {
      headers: {}
    };
  }

  itemLoad = () => {
    console.log(this.props.categoryInfo);
    if (this.props.categoryInfo == null) {
      return null;
    } else {
      let categoryKeys = Object.keys(this.props.categoryInfo);
      return categoryKeys.map(key => (
        <Header key={key} name={key} header={this.props.categoryInfo[key]} />
      ));
    }
  };

  render() {
    return <div>{this.itemLoad()}</div>;
  }
}

const mapStateToProps = state => ({
  categoryInfo: state.reportState.reportData
});

export default connect(mapStateToProps, null)(category);
//export default category;
