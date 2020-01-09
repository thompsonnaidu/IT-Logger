import React,{useEffect} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

const App=()=> {
  useEffect(()=>{
    //initialize materialize js
    M.AutoInit();
  },[]);
  return (
    <div className="App">
      My application
    </div>
  );
}

export default App;
