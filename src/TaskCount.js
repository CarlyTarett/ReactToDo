import React from "react";

class TaskCount extends React.Component {
  render() {
    return (

      <div>

      <p>Things to do: {this.props.number} </p>

      </div>
    
    );
  }
}

export default TaskCount;