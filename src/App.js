import React,{useEffect, Fragment} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/layout/SearchBar'
import Log from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/techs/AddTechModal'

const App=()=> {
  useEffect(()=>{
    //initialize materialize js
    M.AutoInit();
  },[]);
  return (
    <Fragment>
      <SearchBar/>
       <div className="container">
          <AddBtn/>
          <AddLogModal/>
          <EditLogModal/>
          <AddTechModal/>
          <Log/>
       </div>
    </Fragment>
  );
}

export default App;
