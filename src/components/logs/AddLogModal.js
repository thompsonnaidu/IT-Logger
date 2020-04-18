import React, {useState}from 'react'

const AddLogModal = () => {

    const [message,setMessage]= useState('');
    const [attention,setAttention]= useState(false);
    const [tech,setTech]= useState('');

    const onSubmit=()=>{
        console.log(message,tech,attention);
    }
    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e=> setMessage(e.target.value)}></input>
                        <label className="active" htmlFor="message">Log Message</label>
                    </div> 
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" className="browser-default" value={tech} onChange={e=>setTech(e.target.value)}>
                            <option value='' disabled>Select Technician</option>
                            <option value='thompson naidu' >Thompson naidu</option>
                            <option value='franky naidu' >Franky Naidu</option>
                            <option value='marshan naidu' >Marshan Naidu</option>
                        </select>
                       </div> 

                </div>                
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={e=>setAttention(!attention)}></input>
                                <span>Need Attention</span>
                            </label>
                        </p>
                    </div> 
                </div>
                
            </div>
            <div className="modal-footer">
                <a href="#" onClick={onSubmit} className="modal-close waves-effect waves-green btn blue">Enter</a>
            </div>
        </div>
    )
}

const modalStyle={
    width:'75%',
    height:'75%'
}
export default AddLogModal
