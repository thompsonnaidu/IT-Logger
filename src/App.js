import React,{useEffect, Fragment} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/layout/SearchBar'

const App=()=> {
  useEffect(()=>{
    //initialize materialize js
    M.AutoInit();
  },[]);
  return (
    <Fragment>
      <SearchBar/>
    </Fragment>
  );
}

export default App;
