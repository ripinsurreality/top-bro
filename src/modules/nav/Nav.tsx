import React from "react"
import "./nav.sass"
import { Link } from "react-router-dom"
import Breadcrumbs, { BreadcrumbsProps } from "@modules/breadcrumbs/Breadcrumbs"

interface NavProps extends BreadcrumbsProps {}

const Nav: React.FC<NavProps> = ({ breadcrumbs }) => {
  return (
    <nav className="nav">
      <div className="nav__main">
        <Link to="/">
          <img className="nav__logo" src="/assets/img/logo.png" alt="logo" />
        </Link>
        <ul className="nav__links">
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
        <div className="nav__lang">en / ru</div>
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </nav>
  )
}

export default Nav
