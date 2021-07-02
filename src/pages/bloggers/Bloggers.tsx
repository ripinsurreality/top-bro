import React from "react"
import "./bloggers.sass"
import Blogger from "@modules/blogger/Blogger"
import Nav from "@modules/nav/Nav"
import Chevron from "@modules/icons/Chevron"

interface BloggersProps {}

export const bloggers = [
  {
    name: "Константин Константинович Константинопольский",
    img: "img1.png",
    media: {
      yt: "3 160 000+",
      vk: "134 000+",
      ig: "128 000+",
    },
  },
  {
    name: "Константин Константинович Константинопольский",
    img: "img2.png",
    media: {
      yt: "3 160 000+",
      vk: "134 000+",
      ig: "128 000+",
    },
  },
  {
    name: "Константин Константинович Константинопольский",
    img: "img3.png",
    media: {
      yt: "3 160 000+",
      vk: "134 000+",
      ig: "128 000+",
    },
  },
  {
    name: "Константин Константинович Константинопольский",
    img: "img4.png",
    media: {
      yt: "3 160 000+",
      vk: "134 000+",
      ig: "128 000+",
    },
  },
  {
    name: "Константин Константинович Константинопольский",
    img: "img5.png",
    media: {
      yt: "3 160 000+",
      vk: "134 000+",
      ig: "128 000+",
    },
  },
  {
    name: "Константин Константинович Константинопольский",
    img: "img6.png",
    media: {
      yt: "3 160 000+",
      vk: "134 000+",
      ig: "128 000+",
    },
  },
  {
    name: "Константин Константинович Константинопольский",
    img: "img7.png",
    media: {
      yt: "3 160 000+",
      vk: "134 000+",
      ig: "128 000+",
    },
  },
  {
    name: "Константин Константинович Константинопольский",
    img: "img8.png",
    media: {
      yt: "3 160 000+",
      vk: "134 000+",
      ig: "128 000+",
    },
  },
]
const Bloggers: React.FC<BloggersProps> = () => {
  return (
    <>
      <Nav
        breadcrumbs={[
          { title: "Главная", link: "/" },
          { title: "Блогеры", link: "/bloggers" },
        ]}
      />
      <main className="bloggers">
        <h1 className="bloggers__title">Блогеры</h1>
        <div className="bloggers__filters">
          Сортировать по:
          <div className="bloggers__filter">
            выберите площадку <Chevron className="bloggers__filter-chevron" />
          </div>
          <div className="bloggers__filter">
            выберите направление
            <Chevron className="bloggers__filter-chevron" />
          </div>
        </div>
        <ul className="bloggers__list">
          {bloggers.map((item, i) => {
            const { name, img, media } = item
            return (
              <Blogger
                name={name}
                img={img}
                media={media}
                id={String(i)}
                key={i}
              />
            )
          })}
        </ul>
      </main>
      <div className="loading">Подгружаем...</div>
    </>
  )
}

export default Bloggers
