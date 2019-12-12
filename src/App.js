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
      { key: 3, description: "task ", status: "live", dateAdded: "2019-12-02" }
    ]
  }

  render() {
    return (
      <div className="App">



        <div className="container">

       
            <Header />
            <InputTask />
            <TaskCount number={this.state.tasks.length} />

      

          {this.state.tasks.map(task => { return <Task text={task.description} /> })}

        </div>



      </div>
    );
  }
}

export default App;
