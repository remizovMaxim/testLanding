import React from 'react'
import './description.css'

const Description = function (props) {
    return (
        <div className="description container">
            <h3 className="description_title">{props.title}</h3>
            <div>
                <div className="description_line"></div>
            </div>
            {props.children}
        </div>
    )
}

export default Description