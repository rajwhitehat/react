import React from 'react';
import './App.css';
import {Greet} from './components/Greet';
import Kohli from './components/ClassComponent';
import Hello from './components/Hello';
import  Message from './components/Message';
class App extends React.Component {
 render(){
  return (
    <div className="App">
<Greet name="T"></Greet>
<Kohli name="U"><button>jk</button></Kohli>
<Hello name="B"></Hello>
<Message ></Message>
    </div>
  );
 } 
}

export default App;
