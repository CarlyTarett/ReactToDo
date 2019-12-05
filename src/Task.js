import React from "react";

class Task extends React.Component {
  render() {
    return (


<div className="row">
        <div className="col-6 col-sm-6">
                 <p>{this.props.text}</p>
        </div>
        <div className="col-3 col-sm-3">
             <button className="btn btn-primary">Done</button>
        </div>
        <div className="col-3 col-sm-3">
             <button className="btn btn-primary">Delete</button>
        </div>


</div>


      
    );
  }
}

export default Task;



