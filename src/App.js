import React,{useEffect, Fragment} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/layout/SearchBar'
import Log from './components/logs/Logs'

const App=()=> {
  useEffect(()=>{
    //initialize materialize js
    M.AutoInit();
  },[]);
  return (
    <Fragment>
      <SearchBar/>
       <div className="container">
          <Log/>
       </div>
    </Fragment>
  );
}

export default App;
