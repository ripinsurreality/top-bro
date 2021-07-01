import React from "react"
import "./nav.sass"

interface NavProps {
  breadcrumbs: string[]
}

const Nav: React.FC<NavProps> = ({ breadcrumbs }) => {
  return (
    <nav className="nav">
      <div className="nav__main">
        <a href="/">
          <img className="nav__logo" src="/assets/img/logo.png" alt="logo" />
        </a>
        <ul className="nav__links">
          <li className="nav__li">
            <a href="/" className="nav__link">
              Блогеры
            </a>
          </li>
          <li className="nav__li">
            <a href="/" className="nav__link">
              Кейсы
            </a>
          </li>
          <li className="nav__li">
            <a href="/" className="nav__link">
              exit agency
            </a>
          </li>
          <li className="nav__li">
            <a href="/" className="nav__link">
              Контакты
            </a>
          </li>
        </ul>
        <div className="nav__lang">en / ru</div>
      </div>
      <ul className="nav__breadcrumbs">
        {breadcrumbs.map((item, i) => (
          <li className="nav__breadcrumb">
            <a href="/" className={`nav__breadcrumb-link ${i === breadcrumbs.length - 1 && "nav__breadcrumb-link--current"}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
