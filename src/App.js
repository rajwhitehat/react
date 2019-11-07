import React from 'react';
import './App.css';
import {Greet} from './components/Greet';
import Kohli from './components/ClassComponent';
import Hello from './components/Hello';
class App extends React.Component {
 render(){
  return (
    <div className="App">
<Greet></Greet>
<Kohli></Kohli>
<Hello></Hello>
    </div>
  );
 } 
}

export default App;
