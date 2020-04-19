import React from 'react'
import PropTypes from 'prop-types'
const TechItems = ({tech}) => {
    return (
        <li className="collection-item">
            <div>
                <a href="#edit-tech-modal" className={`modal-trigger `}>{`${tech.firstname} ${tech.lastname}`}</a>
                <a href="" className="secondary-content">
                    <span className="material-icons grey-text">delete</span>
                </a>
            </div>
        </li>
    )
}

TechItems.propTypes={
    tech:PropTypes.object.isRequired
}

export default TechItems
