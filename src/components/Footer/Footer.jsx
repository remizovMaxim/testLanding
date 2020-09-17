import { Link } from 'gatsby'
import React from 'react'
import './footer.css'
import logoPath from '../../images/footer-logo.png'
import iconFb from '../../images/icon-fb.png'
import iconInst from '../../images/inst.png'

const Footer = function () {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer_logo">
                    <Link to='#'><img src={logoPath} alt="icon" /></Link>
                </div>
                <div className="footer_social">
                    <Link to='#'><img src={iconFb} alt="icon" /></Link>
                    <Link to='#'><img src={iconInst} alt="icon" /></Link>
                    <Link to='#'><img src={iconFb} alt="icon" /></Link>
                    <Link to='#'><img src={iconInst} alt="icon" /></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer