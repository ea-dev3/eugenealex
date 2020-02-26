import React from "react"
import "../components/styles/footer.css"
export default function footer() {
  return (
    <div className="footerbody">
      <p className="ftrtext">
        &copy; 2020 | Find me on:
        <a href="https://github.com/ea-dev3" target="_blank"> &nbsp;Github</a>
        <a href="https://www.linkedin.com/in/eugene-alex-1890a1195/" target="_blank">
          {" "}
          &nbsp; LinkedIn
        </a>
        <a href="https://twitter.com/ea_dev3" target="_blank"> &nbsp; Twitter </a>
      </p>
      <p className="ftrtext">
        Made by Eugene Alex with <span className="love"> ❤️ </span>{" "}
      </p>
    </div>
  )
}
