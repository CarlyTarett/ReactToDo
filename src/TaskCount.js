import React from "react";

import "./TaskCount.css";


class TaskCount extends React.Component {
  render() {
    return (

      <p className="tc">Things to do: {this.props.number} </p>
    );
  }
}

export default TaskCount;