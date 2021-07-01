import Ig from "@modules/icons/Ig"
import Vk from "@modules/icons/Vk"
import Yt from "@modules/icons/Yt"
import React from "react"
import { Link } from "react-router-dom"
import "./blogger.sass"

interface BloggerProps {
  name: string
  img: string
  media: {
    yt: string
    vk: string
    ig: string
  }
  id: string
}

const Blogger: React.FC<BloggerProps> = ({ name, img, media, id }) => {
  const { yt, vk, ig } = media
  return (
    <li className="blogger">
      <Link to={`/bloggers/${id}`}>
        <img className="blogger__img" src={`/assets/img/${img}`} alt={name} />
        <div className="blogger__overlay"></div>
        <div className="blogger__main">
          <h3 className="blogger__name">{name}</h3>
          <ul className="blogger__media">
            <li className="blogger__media-item">
              <Yt />
              {yt}
            </li>
            <li className="blogger__media-item">
              <Vk />
              {vk}
            </li>
            <li className="blogger__media-item">
              <Ig />
              {ig}
            </li>
          </ul>
        </div>
      </Link>
    </li>
  )
}

export default Blogger
