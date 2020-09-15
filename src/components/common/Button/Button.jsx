import { Link } from 'gatsby'
import React from 'react'
import './button.css'

const Button = function (props) {    
    return <Link to={props.linkBtn} className={`button ${props.linkType}`}>{props.linkText}</Link>
}


export default Button