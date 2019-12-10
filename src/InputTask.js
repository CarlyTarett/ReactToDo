import React from "react";

class InputTask extends React.Component {

  state = {
    description:  "",
    status: "",
    dateAdded: "2019-12-09"
}

updateName = (event) =>{
    console.log(event.target.value);
    this.setState({
        description: event.target.value
     } );
}

  render() {
    return (

      
       <div className="col-12 col-sm-6"> 
  
            <form>
            <input type="text" onChange={this.updateName} value={this.state.description} className="form-control" />                    <button type="button">Add</button>
            </form>

      </div>

    );
  }
}

export default InputTask;