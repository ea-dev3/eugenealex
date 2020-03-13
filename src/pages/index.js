import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import "../components/styles/style.css"

import Footer from "../components/footer"
import Header from "../components/header"

import Particles from "react-particles-js"

const particleOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
}

const IndexPage = () => (
  <div>
    <Particles
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
      params={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: "top-left",
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
    />
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
            <a className="btnlink" href="#contact">
              Get In Touch
            </a>
          </button>
        </AniLink>
        <button className="buttonResume">
          <a
            className="btnlink"
            href="https://drive.google.com/file/d/1zKQrwcB-O3D4e3ezgPsKs6IUD93Od4c1/view"
          >
            &nbsp;My Resume&nbsp;
          </a>
        </button>
      </div>
    </div>
    <Footer />
  </div>
)

export default IndexPage
