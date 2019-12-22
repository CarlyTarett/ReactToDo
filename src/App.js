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
      { key: uuid(), description: "Task 1", status: "live", dateAdded: "2019-12-02" },
      { key: uuid(), description: "Task 2 ", status: "live", dateAdded: "2019-12-02" },
      { key: uuid(), description: "Task 3", status: "completed", dateAdded: "2019-12-02" }
    ]
  }

  //changes app's state by adding a developer to it

  inputNewTask = (description) => {
    console.log("input a task");

    // // Create a new developer object
    // const newDev = {
    //   name: name,
    //   skills: skills,
    //   available: true,
    //   dateJoined: dateJoined,
    //   id: uuid()
    // };

    // // Copy the array of developers from state using slice
    // const copy = this.state.developers.slice();

    // // Push that object into the array of developers
    // copy.push(newDev);

    // // Make sure state is updated
    // this.setState({
    //   developers: copy
    // });
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
                // deleteDeveloperFunc={this.deleteDeveloper}
                // key={developer.id}
                // available={developer.available}
                // name={developer.name}
                // skills={developer.skills}
                // dateJoined={developer.dateJoined}
                // id={developer.id}
                text={task.description}
              />
            );
          })}


          
          {/* {this.state.tasks.map(task => { return <Task text={task.description} /> }  )  } */}

          <p id="completed" >Completed Tasks</p>
  
          {completedTasks.map(task => {
            return (
              <Task
                // deleteDeveloperFunc={this.deleteDeveloper}
                // key={developer.id}
                // available={developer.available}
                // name={developer.name}
                // skills={developer.skills}
                // dateJoined={developer.dateJoined}
                // id={developer.id}
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
