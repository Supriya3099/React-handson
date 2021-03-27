import React, { Component } from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

class App extends Component {
  render(){
    return (
      <div className="App">
      <CalculateScore name={"Jashwanth"}
      school={"DNV Public School"}
      total={284}
      goal={3}
      />
      </div>
    )
  }
  
}

export default App;
