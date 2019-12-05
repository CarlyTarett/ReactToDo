import React from 'react';
import logo from './logo.svg';
import Header from './Header.js';
import InputTask from './InputTask.js';
import TaskCount from './TaskCount.js';
import Task from './Task.js';


import './App.css';

function App() {
  return (
    <div className="App">
     
         <head>
       
         </head>

         <body>
         <div className="container">
    
          <Header/>

<div className="row">
        <div className="col-12 col-sm-6">
          
          <InputTask/>
        </div>

        <div className="col-12 col-sm-6">

          <TaskCount/>
          </div>
</div>
     
              <Task text="First Task"/>
              <Task text="Second Task"/>
          </div>

        </body>

    </div>
  );
}

export default App;
