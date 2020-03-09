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
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        className="form-container"
        name="contact"
        action="/"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label className="form-item" htmlFor="name">
          Full Name
          <input type="text" name="name" id="name" />
        </label>
        <label className="form-item" htmlFor="email">
          Email
          <input type="email" name="email" id="email" />
        </label>
        <label className="form-item" htmlFor="services">
          Pick an Option:
          <select id="service" name="services">
            <option value="WebsiteInOneDay">
              {" "}
              Website in 1 day for ksh.10,000
            </option>
            <option value="WebAppInTwoWeeks">
              WebApp in 2 weeks for ksh.50,000{" "}
            </option>
            <option value="HybridAppAsItGrows">
              HybridApp as it grows for stock or contractual payout{" "}
            </option>
            <option value="DevOpsConsultation">
              DevOps Consultation for contractual payout{" "}
            </option>
          </select>
        </label>
        <label className="form-item" htmlFor="message">
          Message
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Add more infomation"
          />
        </label>
        <input type="submit" value="Submit" />
        <input type="reset" value="Clear" />
      </form>
    </div>
    <Footer />
  </div>
)

export default ContactPage
