import React from 'react';
import logo from './logo.svg';
import uuid from "uuid/v4";
import Header from './Header.js';
import InputTask from './InputTask.js';
import TaskCount from './TaskCount.js';
import Task from './Task.js';
import moment from "moment";



import './App.css';

class App extends React.Component {
  state = {
    tasks: [
      { id: uuid(), description: "Task 1", status: "live", dateAdded: "2019-12-02", dueDate: "2020-12-02" },
      { id: uuid(), description: "Task 2 ", status: "live", dateAdded: "2019-12-02", dueDate: "2020-12-02" },
      { id: uuid(), description: "Task 3", status: "completed", dateAdded: "2019-12-02", dueDate: "2020-12-02" }
    ]
  }

  inputNewTask = (description, dueDate) => {
    console.log("input a task");

    const newTask = {
      description: description,
      status: "live",
      dateAdded: moment().format().slice(0,10),
      dueDate: dueDate,
      id: uuid()
    };

    const copy = this.state.tasks.slice();
    copy.push(newTask);
    this.setState({
      tasks: copy
    });
  };

  deleteTask = id => {

    const filteredTasks = this.state.tasks.map(task => {
      
      if(task.id !== id)
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
      
      if(task.id !== id)
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
                      <div style = {{height:"100vh"}}> </div>
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
