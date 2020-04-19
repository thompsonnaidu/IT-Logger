import React, {useState}from 'react'
// import M from 'materialize-css/dist/js/materialize.min.js'
import Techs from './Techs';

const ListTechModal = () => {

    const [firstName,setFirstName]= useState('');
    const [lastName,setLastName]= useState('');
    
    
    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <Techs/>
            </div>
            <div className="modal-footer">
                <a href="#" className="modal-close waves-effect waves-green btn blue">Close</a>
            </div>
        </div>
    )
}

export default ListTechModal
