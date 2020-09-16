import React from "react"
import "./header.css"
import logoPath from "../../images/logo.png"
import { Link } from "gatsby"

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="logo">
        <Link to="#">
          <img src={logoPath} alt="logo" />
        </Link>
      </div>
      <menu className="menu">
        <Link to="#about" className="menu_item">
          О нас
        </Link>
        <Link to="#services" className="menu_item">
          Наши услуги
        </Link>
        <Link to="#elephants" className="menu_item">
          Наши слоны
        </Link>
        <Link to="#" className="menu_item">
          Блог
        </Link>
        <Link to="#" className="menu_item">
          Контакты
        </Link>
      </menu>
    </div>
  </header>
)

export default Header
