import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
const LogItems = ({log}) => {
    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'} `}>{log.message}</a>
                <br/>
                <span className='grey-text'>
                    <span className='black-text'>ID #{log.id} </span> last updated by
                    <span className='black-text'> {log.tech} </span> on {new Date(log.date).toString()} 
                </span>
                <a href="" className="secondary-content">
                    <span className="material-icons grey-text">delete</span>
                </a>
            </div>
        </li>
    )
}

LogItems.propTypes={
    log:PropTypes.object.isRequired
}

export default LogItems
