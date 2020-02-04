import React from 'react';
import logo from './logo.svg';
import uuid from "uuid/v4";
import Header from './Header.js';
import InputTask from './InputTask.js';
import TaskCount from './TaskCount.js';
import Task from './Task.js';
import moment from "moment";
import axios from "axios";

import './App.css';

class App extends React.Component {
  state = {
    tasks: [ ]
  };

// special built in method runs whenever mounts
  componentDidMount(){
    //fetch the tasks making a GET request
    axios.get(" https://ma5s5cp7sc.execute-api.eu-west-1.amazonaws.com/dev/tasks")
        .then( (response) => {
          const tasks = response.data.tasks;
          this.setState({
            tasks: tasks
          })
          console.log(response);
        })
        .catch((err) => {
        console.log(err);
        })
    // then set them as the state 
  }

   inputNewTask = (description, dueDate) => {
    console.log("input a task");

    // Create a new developer object
    const newTask = {
      description: description,

      //XX change the status to completed and deleted
      status: "live",
      dateAdded: moment().format().slice(0,10),
      dueDate: dueDate,
      id: uuid()
    };

    // // Copy the array of developers from state using slice
    const copy = this.state.tasks.slice();
    copy.push(newTask);
    this.setState({
      tasks: copy
    });
  };

  deleteTask = id => {

    const filteredTasks = this.state.tasks.map(task => {

      if (task.id !== id)
        return task;
      else
        task.status = "deleted"
      return task;
    });
    console.log(filteredTasks);
    this.setState({
      tasks: filteredTasks
    });
  };

  markDone = id => {

    const filteredTasks = this.state.tasks.map(task => {

      if (task.id !== id)
        return task;
      else
        task.status = "completed"
      return task;
    });
    console.log(filteredTasks);
    this.setState({
      tasks: filteredTasks
    });
  };

  render() {
    const liveTasks = this.state.tasks.filter(task => {
      return task.status === "live";
    });

    const completedTasks = this.state.tasks.filter(task => {
      return task.status === "completed";
    });


    return (
      <div className="App">

        <div className="container">

          <div className="row">
            <div className="col-2 col-sm-2 edge">
              <div style={{ height: "100vh" }}> </div>
            </div>

            <div className="col-8 col-sm-8">

              <Header />

              <InputTask className="inputtask" inputTaskFunc={this.inputNewTask} />
              <TaskCount number={liveTasks.length} />

              <p>Current Tasks</p>

              {liveTasks.map(task => {
                return (
                  <Task
                    deleteTaskFunc={this.deleteTask}
                    markTaskDoneFunc={this.markDone}
                    status={task.status}
                    dueDate={task.dueDate}
                    id={task.id}
                    text={task.description}
                  />
                );
              })}

              <scan id="completed" > </scan>
              <p >Completed Tasks</p>
              {completedTasks.map(task => {
                return (
                  <Task
                    deleteTaskFunc={this.deleteTask}
                    status={task.status}
                    id={task.id}
                    text={task.description}
                  />
                );
              })}



            </div>
            <div className="col-2 col-sm-2 edge">
              <div> </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
