import React, { useEffect, useRef, useState } from "react"
import "./bloggers.sass"
import Blogger from "@modules/blogger/Blogger"
import Nav from "@modules/nav/Nav"
import Dropdown from "@modules/dropdown/Dropdown"

interface BloggersProps {}

interface IUser {
  login: string
  id: number
  avatar_url: string
  followers: number
  name: string
}

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
  const [loading, setLoading] = useState(false)
  const loadedUsers = useRef<IUser[]>([])
  const bloggersListRef = useRef<HTMLUListElement>(null)
  const fetchGitUsers = async (since?: number) => {
    setLoading(true)
    console.log(loadedUsers)
    try {
      const res = await fetch(
        `https://api.github.com/users?since=${since ?? 0}&per_page=8`
      )
      const usersList: { login: string }[] = await res.json()
      const promisedUsers = await Promise.all(
        usersList.map((user) =>
          fetch(`https://api.github.com/users/${user.login}`).then((res) => {
            if (res.ok) return res.json()
            throw new Error(res.statusText)
          })
        )
      )
      // console.log(promisedUsers)
      // setLoadedUsers(users => [...users, ...promisedUsers])
      loadedUsers.current.push(...promisedUsers)
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchGitUsers()
    const loadUsers = () => {
      if (!bloggersListRef.current) return
      console.clear()
      console.log("Window innerheight:" + window.innerHeight)
      console.log("Document scrolltop:" + document.documentElement.scrollTop)
      console.log("Document scrollheight:" + document.scrollingElement?.scrollHeight)
      console.log("List top:" + bloggersListRef.current.scrollTop)
      console.log("List scroll height:" + bloggersListRef.current.scrollHeight)
      console.log("List offset top:" + bloggersListRef.current.offsetTop)
      if (
        !(
          window.innerHeight + document.documentElement.scrollTop >= bloggersListRef.current.scrollHeight /* document.documentElement.scrollTop ===
          document.scrollingElement?.scrollHeight */
        )
      )
        return
      fetchGitUsers(loadedUsers.current.length - 1)
    }

    window.addEventListener("scroll", loadUsers)

    return () => {
      window.removeEventListener("scroll", loadUsers)
    }
  }, [])
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
        <ul className="bloggers__list" ref={bloggersListRef}>
          {loadedUsers.current.map((item, i) => {
            const { name, avatar_url, followers, login } = item
            const media = {
              vk: String(followers),
              ig: String(followers),
              yt: String(followers),
            }
            return (
              <Blogger
                name={name}
                img={avatar_url}
                id={login}
                key={i}
                media={media}
              />
            )
          })}
        </ul>
      </main>
      {loading ? <div className="loading">Подгружаем...</div> : ""}
    </>
  )
}

export default Bloggers
