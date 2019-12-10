import React from "react"
// import "./Developer.css"

class TaskEntry extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-6">
        <p>{this.props.name}</p>
        </div>
        <div className="col-12 col-sm-4">
        <p>{this.props.skills.join(", ")}</p>
        </div>
        <div className="col-12 col-sm-2">
         
         {this.props.available === true 
          ?   <button className="btn btn-primary book-button">Book</button>
          :   <button disabled className="btn btn-primary book-button">Unavailable</button>
         }
        </div>
      </div>
    )
  }
}

export default Developer;