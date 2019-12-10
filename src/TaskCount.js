import React from "react";

class TaskCount extends React.Component {
  render() {
    return (

      <div className="col-12 col-sm-6">

      <h1>Things to do: {this.props.number} </h1>

      </div>
    
    );
  }
}

export default TaskCount;