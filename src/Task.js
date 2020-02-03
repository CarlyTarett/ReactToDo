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
        <div className="col-5 col-sm-5">
          <p>{this.props.text}</p>
        </div>
        <div className="col-3 col-sm-3">
          <p>{this.props.dueDate}</p>
        </div>
        <div className="col-2 col-sm-2">


          {this.props.status === "live" ? (
            <button className="btn btn-primary book-button" onClick={this.handleDone}>Done</button>
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
