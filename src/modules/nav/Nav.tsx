import React, { useState } from "react"
import "./nav.sass"
import { Link } from "react-router-dom"
import Breadcrumbs, { BreadcrumbsProps } from "@modules/breadcrumbs/Breadcrumbs"

interface NavProps extends BreadcrumbsProps {}

const Nav: React.FC<NavProps> = ({ breadcrumbs }) => {
  const [active, setActive] = useState(false)
  const toggleNav = () => {
    setActive(!active)
  }
  return (
    <>
      <nav className="nav">
        <div className="nav__main">
          <Link to="/">
            <img className="nav__logo" src="/assets/img/logo.png" alt="logo" />
          </Link>
          <button className="nav__burger" onClick={toggleNav}>
            <div
              className={`nav__burger-line ${
                active ? "nav__burger-line--active" : ""
              }`}
            ></div>
            <div
              className={`nav__burger-line ${
                active ? "nav__burger-line--active" : ""
              }`}
            ></div>
            <div
              className={`nav__burger-line ${
                active ? "nav__burger-line--active" : ""
              }`}
            ></div>
          </button>
          <ul className={`nav__links ${active ? "nav__links--active" : ""}`}>
            <li className="nav__li">
              <Link to="/bloggers" className="nav__link">
                Блогеры
              </Link>
            </li>
            <li className="nav__li">
              <Link to="/" className="nav__link">
                Кейсы
              </Link>
            </li>
            <li className="nav__li">
              <Link to="/" className="nav__link">
                exit agency
              </Link>
            </li>
            <li className="nav__li">
              <Link to="/" className="nav__link">
                Контакты
              </Link>
            </li>
          </ul>
          <div className={`nav__lang ${active ? "nav__lang--active" : ""}`}>
            en / ru
          </div>
        </div>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </nav>
      <div className="nav-filler"></div>
      <div
        className={`nav-modal ${active ? "nav-modal--active" : ""}`}
        onClick={toggleNav}
      ></div>
    </>
  )
}

export default Nav
