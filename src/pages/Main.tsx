import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from "@modules/nav/Nav"
import Footer from "@modules/footer/Footer"
import Bloggers from "./bloggers/Bloggers"
import BloggerDetails from "./bloggers/bloggerDetails/BloggerDetails"
import AnimatedCursor from "@modules/animatedCursor/AnimatedCursor"

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <div>
      <AnimatedCursor />
      <Router>
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
      </Router>
    </div>
  )
}

export default Main
