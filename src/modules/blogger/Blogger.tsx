import Ig from "@modules/icons/Ig"
import Vk from "@modules/icons/Vk"
import Yt from "@modules/icons/Yt"
import React from "react"
import { Link } from "react-router-dom"
import "./blogger.sass"

interface BloggerProps {
  name: string
  img: string
  media?: {
    yt?: string
    vk?: string
    ig?: string
  }
  id: string
}

const Blogger: React.FC<BloggerProps> = ({ name, img, id, media }) => {
  return (
    <li className="blogger">
      <Link to={`/bloggers/${id}`}>
        <img className="blogger__img" src={img} alt={name} />
        <div className="blogger__overlay"></div>
        <div className="blogger__main">
          <h3 className="blogger__name">{name}</h3>
          <ul className="blogger__media">
            <li className="blogger__media-item">
              {media?.yt ? <><Yt />{media?.yt}</> : ""}
            </li>
            <li className="blogger__media-item">
              {media?.vk ? <><Vk />{media?.vk}</> : ""}
            </li>
            <li className="blogger__media-item">
              {media?.ig ? <><Ig />{media?.ig}</> : ""}
            </li>
          </ul>
        </div>
      </Link>
    </li>
  )
}

export default Blogger
