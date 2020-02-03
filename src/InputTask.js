import React from "react";

import "./InputTask.css";


class InputTask extends React.Component {
  state = {
    description: "",
    status: "",
    dateAdded: "2019-12-09",
    dueDate: "2020-05-11"
  }

  updateName = (event) => {
    this.setState({
      description: event.target.value
    });
  }


  updateDue = (event) => {
    this.setState({
      dueDate: event.target.value
    });
  }

  inputTask = () => {

    this.props.inputTaskFunc(
      this.state.description,
      this.state.dueDate
    );

  };

  render() {
    return (

      <div className="row myInput">
        <div className="col-6">

          <input type="text"
            onChange={this.updateName}
            value={this.state.description}
            className="form-control" />

        </div>

        <div className="col-4">

          <input type="date"
            onChange={this.updateDue}
            value={this.state.dueDate}
            className="form-control" />

        </div>

        <div className="col-2">


          <button className="btn btn-primary" onClick={this.inputTask}>
            Add
          </button>

        </div>


      </div>





    );
  }
}

export default InputTask;