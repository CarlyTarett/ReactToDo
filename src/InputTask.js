import React from "react";

import "./InputTask.css";


class InputTask extends React.Component {

  state = {
    description: "",
    status: "",
    dateAdded: "2019-12-09"
  }

  updateName = (event) => {
    console.log(event.target.value);
    this.setState({
      description: event.target.value
    });
  }

  render() {
    return (

      <div className="row myInput">
        <div className="col-8">

          <input type="text"
            onChange={this.updateName}
            value={this.state.description}
            className="form-control" />

        </div>

        <div className="col-4">


        <button className="btn btn-primary">Add</button>       
         </div>


      </div>

    



    );
  }
}

export default InputTask;