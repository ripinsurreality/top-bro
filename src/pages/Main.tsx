import React from "react"
import Nav from "@modules/Nav"
import Footer from "@modules/Footer"

interface MainProps {}

const Main: React.FC<MainProps> = () => {
    return (<div>
        <Nav breadcrumbs={["Главная", "Блогеры"]}/>
        <Footer />
    </div>)
}

export default Main