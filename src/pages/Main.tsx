import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from "@modules/nav/Nav"
import Footer from "@modules/footer/Footer"
import Bloggers from "./bloggers/Bloggers"
import BloggerDetails from "./bloggers/bloggerDetails/BloggerDetails"

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Nav breadcrumbs={[{ title: "Главная", link: "/" }]} />
          </Route>
          <Route exact path="/bloggers">
            <Bloggers />
          </Route>
          <Route path="/bloggers/:id">
            <BloggerDetails />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default Main
