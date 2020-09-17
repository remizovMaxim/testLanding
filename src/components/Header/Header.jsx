import React, { useState } from "react"
import "./header.css"
import logoPath from "../../images/logo.png"
import { Link } from "gatsby"

const Header = function () {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="#">
            <img src={logoPath} alt="logo" />
          </Link>
        </div>
        <menu className={`menu${isOpen ? ' open' : ''}`}>
          <Link to="#about" className="menu_item">
            О нас
        </Link>
          <Link to="#services" className="menu_item">
            Наши услуги
        </Link>
          <Link to="#elephants" className="menu_item">
            Наши слоны
        </Link>
          <Link to="#blog" className="menu_item">
            Блог
        </Link>
          <Link to="#contact" className="menu_item">
            Контакты
        </Link>
        </menu>
        <div className={`burger${isOpen ? ' close' : ''}`} onClick={()=>setIsOpen(isOpen ? false : true)}>
          <div className="burger_line"></div>
          <div className="burger_line"></div>
          <div className="burger_line"></div>
        </div>
      </div>
    </header>
  )
}

export default Header
