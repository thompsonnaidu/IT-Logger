import React ,{useState}from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {
    const [firstName,setFirstName]= useState('');
    const [lastName,setLastName]= useState('');

    const onSubmit=()=>{
        if(firstName === '' || lastName === ''){
            M.toast({html:"Please enter firsName and lastName"});
        }else{
            console.log(firstName,lastName);
        }

        
        //clear field
        setFirstName('');
        setLastName('');
    }
    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>Enter Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstName" value={firstName} onChange={e=> setFirstName(e.target.value)}></input>
                        <label className="active" htmlFor="message">First Name</label>
                    </div> 
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastName" value={lastName} onChange={e=> setLastName(e.target.value)}></input>
                        <label htmlFor="lastName">Last Name</label>
                    </div> 
                </div>
            </div>
            <div className="modal-footer">
                <a href="#" onClick={onSubmit} className="modal-close waves-effect waves-green btn blue">Enter</a>
            </div>
        </div>
    )
}

export default AddTechModal
