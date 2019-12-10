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
      {key: 1 , description: "task ", status:  "live" , dateAdded: "2019-12-02" },
      {key: 2 , description: "task ", status: "live", dateAdded: "2019-12-02" },
      {key: 3 , description: "task ", status: "live" , dateAdded: "2019-12-02" }
    ]
  }

render(){
  return (
    <div className="App">
     
         <head>
       
         </head>

         <body>
         <div className="container">
    
          <Header/>


          <div className="row"> 

               <InputTask/>
              

               {/*  */}

               <TaskCount/>

          </div>

        {this.state.tasks.map(task => {  return <Task text={task.description}  />})}

          {/* </div> */}
{/* </div> */}
     
          
          </div>

        </body>

    </div>
  );
}
}

export default App;
