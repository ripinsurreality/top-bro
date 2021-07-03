import React from "react"
import "./bloggers.sass"
import Blogger from "@modules/blogger/Blogger"
import Nav from "@modules/nav/Nav"
import Dropdown from "@modules/dropdown/Dropdown"

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
  const platforms = [
    { value: "vk", label: "VKontakte" },
    { value: "yt", label: "YouTube" },
    { value: "ig", label: "Instagram" },
  ]
  const categories = [
    { value: "example", label: "Например: Путешествия", disabled: true },
    { value: "all", label: "Все" },
    { value: "diy", label: "DIY" },
    { value: "cars", label: "Авто" },
    { value: "show", label: "Авторское Шоу" },
    { value: "unboxing", label: "Анбоксинг" },
    { value: "food", label: "Еда" },
    { value: "animals", label: "Животные" },
    { value: "games", label: "Игры" },
    { value: "langs", label: "Иностранные языки" },
    { value: "movies", label: "Кино" },
    { value: "beauty", label: "Красота" },
  ]
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
            <Dropdown options={platforms} placeholder="выберите площадку" />
          </div>
          <div className="bloggers__filter">
            <Dropdown options={categories} placeholder="выберите направление" />
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
