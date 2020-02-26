import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import "../components/styles/style.css"

import Footer from "../components/footer"
import Header from "../components/header"
const IndexPage = () => (
  <div>
    <Header />
    <div className="homepage">
      <SEO title="Home" />
      <p className="intro1">Hi, my name is</p>
      <h2 className="introname">Eugene Alex </h2>

      <h3>
        Do you want to develop an
        <br />
        app / website ?
      </h3>

      <p className="para">
        What app !!
        <br />
        That's the first question in app development
      </p>
      <div className="btnrow">
        <AniLink cover to="contact">
          <button className="button">
            <a className="btnlink" href="">
              Get In Touch
            </a>
          </button>
        </AniLink>
        <button className="button">
          <a
            className="btnlink"
            href="https://drive.google.com/open?id=1G8zw95uXzs2PJjURlfpuAXNWiY66Gy_b"
          >
            &nbsp;Resume&nbsp;
          </a>
        </button>
      </div>
    </div>
    <Footer />
  </div>
)

export default IndexPage
