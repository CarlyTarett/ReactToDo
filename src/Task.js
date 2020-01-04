import React from "react";

class Task extends React.Component {

  handleDelete = () => {
    this.props.deleteTaskFunc(this.props.id);
  }

  handleDone = () => {
    this.props.markTaskDoneFunc(this.props.id);
  }
  render() {
    return (


<div className="row">
        <div className="col-8 col-sm-8">
                 <p>{this.props.text}</p>
        </div>
        <div className="col-2 col-sm-2">


        {this.props.status === "live" ? (
            <button className="btn btn-primary book-button"onClick={this.handleDone}>Done</button>
          ) : (
            <p></p>

          )}

             {/* <button className="btn btn-primary">Done</button> */}
        </div>
        <div className="col-2 col-sm-2">
        <button className="btn btn-danger" onClick={this.handleDelete}>
            Delete
          </button>
        </div>


</div>


      
    );
  }
}

export default Task;



