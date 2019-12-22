import React from 'react';
import logo from './logo.svg';
import uuid from "uuid/v4";
import Header from './Header.js';
import InputTask from './InputTask.js';
import TaskCount from './TaskCount.js';
import Task from './Task.js';



import './App.css';

class App extends React.Component {
  state = {
    tasks: [
      { id: uuid(), description: "Task 1", status: "live", dateAdded: "2019-12-02" },
      { id: uuid(), description: "Task 2 ", status: "live", dateAdded: "2019-12-02" },
      { id: uuid(), description: "Task 3", status: "completed", dateAdded: "2019-12-02" }
    ]
  }

  //changes app's state by adding a developer to it

  inputNewTask = (description) => {
    console.log("input a task");

    // Create a new developer object
    const newTask = {
      description: description,
      status: "live",
      // dateJoined: dateJoined,
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

    console.log("deleting a task");
    const filteredTasks = this.state.tasks.filter(task => {
      return task.id !== id;
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

          <Header />

          <InputTask inputTaskFunc={this.inputNewTask} />
          <TaskCount number={liveTasks.length} />

          <p>Current Tasks</p>

          {liveTasks.map(task => {
            return (
              <Task
                deleteTaskFunc={this.deleteTask}
                // id={developer.id}
                status={task.status}
                // name={developer.name}
                // skills={developer.skills}
                // dateJoined={developer.dateJoined}
                id={task.id}
                text={task.description}
              />
            );
          })}

          <p id="completed" >Completed Tasks</p>

          {completedTasks.map(task => {
            return (
              <Task
              deleteTaskFunc={this.deleteTask}
                // id={developer.id}
                status={task.status}
                // name={developer.name}
                // skills={developer.skills}
                // dateJoined={developer.dateJoined}
                id={task.id}
                text={task.description}
              />
            );
          })}

        </div>

      </div>
    );
  }
}

export default App;
