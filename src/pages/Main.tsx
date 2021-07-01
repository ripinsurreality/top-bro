import React from "react"
import Nav from "@modules/nav/Nav"
import Footer from "@modules/footer/Footer"
import Bloggers from "./bloggers/Bloggers"

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <div>
      <Nav breadcrumbs={["Главная", "Блогеры"]} />
        <Bloggers />
      <Footer />
    </div>
  )
}

export default Main
