import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import "../components/styles/style.css"
import Footer from "../components/footer"

const ContactPage = () => (
  <div>
    <AniLink cover to="/" bg="#663399" direction="right">
      <b className="gohome"> 🏠</b>
    </AniLink>
    <div>
      <SEO title="Contact" />
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        className="form-container"
      >
        <label className="form-item">
          Full Name
          <input type="text" name="name" id="name" />
        </label>
        <label className="form-item">
          Email
          <input type="email" name="email" id="email" />
        </label>
        <label className="form-item">
          Pick an Option:
          <select id="service" name="services">
            <option value="Frontend Development">Frontend Development </option>
            <option value="Backend Development">Backend Development </option>
            <option value="Full Stack Development">
              Full Stack Develoment{" "}
            </option>
            <option value="DevOps">DevOps </option>
          </select>
        </label>
        <label className="form-item">
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <input type="submit" value="Submit" />
        <input type="reset" value="Clear" />
      </form>
    </div>
    <Footer />
  </div>
)

export default ContactPage
