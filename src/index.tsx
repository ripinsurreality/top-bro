import "preact/debug"

import { render } from "react-dom"
import * as React from "react"
import "@/styles/styles.sass"
import Main from "./pages/Main"

function docReady(fn: () => void) {
  // see if DOM is already available
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // call on next available tick
    setTimeout(fn, 1)
  } else {
    document.addEventListener("DOMContentLoaded", fn)
  }
}

docReady(function () {
  const main = document.querySelector("#main") as HTMLDivElement
  console.log(main)
  render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>,
    main
  )
})
