import React from "react"
import "./breadcrumbs.sass"
import { Link } from "react-router-dom"

export interface BreadcrumbsProps {
  breadcrumbs: IBreadcrumb[]
}

interface IBreadcrumb {
  title: string
  link: string
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <ul className="breadcrumbs">
      {breadcrumbs.map((item, i) => {
        const { title, link } = item
        return (
          <li className="breadcrumb">
            <Link
              to={link}
              className={`breadcrumb-link ${
                i === breadcrumbs.length - 1 && "breadcrumb-link--current"
              }`}
            >
              {title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Breadcrumbs
