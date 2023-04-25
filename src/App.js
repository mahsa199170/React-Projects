
import './App.css';

import React from 'react'
import UseState from './components/UseState';
import Counter from './components/Counter';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';
import Conditionals from './components/Conditionals';
import Conditionals2 from './components/Conditionals2'; 
import Conditionals3 from './components/Conditionals3';
import TaskList from './components/TaskList';
import UseEffect from './components/UseEffect';
import UseEffectCleanup from './components/UseEffectCleanup';



const App = () => {
  return (
    <div>
      {/* <TaskList /> */}
      {/* <UseEffect /> */}
      <UseEffectCleanup />
     
     
    </div>
  )
}

export default App