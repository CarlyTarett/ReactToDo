import React from "react";

class TaskCount extends React.Component {
  render() {
    return (

 

        <p>Things to do: {this.props.number} </p>

    

    );
  }
}

export default TaskCount;