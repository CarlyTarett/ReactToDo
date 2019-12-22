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

  inputTask = () => {
    // Maybe don't let someone add the new developer if the name/skills is empty

    // const skillsArray = this.state.skills.split(",");
    // const filteredSkills = skillsArray.filter(skill => {
    //   return skill.length > 0;
    // });

    this.props.inputTaskFunc(
      this.state.description
    );

    // Reset state to empty values/intital values
  };



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


          <button className="btn btn-primary" onClick={this.inputTask}>
            Add
          </button>

        </div>


      </div>





    );
  }
}

export default InputTask;