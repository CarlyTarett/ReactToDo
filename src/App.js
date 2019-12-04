import React from 'react';
import logo from './logo.svg';
import Header from './Header.js';
import InputTask from './InputTask.js';
import TaskCount from './TaskCount.js';


import './App.css';

function App() {
  return (
    <div className="App">
    
          <Header/>
          <InputTask/>
          <TaskCount/>

          <div className="container">
              <Task text="here is the text1"/>
              <Task text="here is the text2"/>
              <Task text="here is the text3"/>
          </div>

    </div>
  );
}

export default App;
