import React, { useState } from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

function App() {
  const [values, setValues] = useState({
    balls: 0,
    strikes: 0
  })


  return (
    <div className="App">
      <Display count={values}/>
      <Dashboard count={values} updateCount={setValues}/>
    </div>
  );
}

export default App;
