import React from 'react';
import logo from './logo.svg';
import Header from './Header.js';
import InputTask from './InputTask.js';
import TaskCount from './TaskCount.js';
import Task from './Task.js';



import './App.css';

class App extends React.Component {
  state = {
    tasks: [
      { key: 1, description: "task ", status: "live", dateAdded: "2019-12-02" },
      { key: 2, description: "task ", status: "live", dateAdded: "2019-12-02" },
      { key: 3, description: "task ", status: "completed", dateAdded: "2019-12-02" }
    ]
  }

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
          <InputTask />
          <TaskCount number={this.state.tasks.length} />


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
