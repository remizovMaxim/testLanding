import React from "react"
import Header from "../components/Header/Header"
import Offer from "../components/Offer/Offer"
import Counter from "../components/Counter/Counter"
import Services from "../components/Services/Services"
import Views from "../components/Views/Views"
import Elephants from "../components/Elephants/Elephants"
import Reviews from "../components/Reviews/Reviews"
import Whois from "../components/Whois/Whois"
import Success from "../components/Success/Success"
import Blog from "../components/Blog/Blog"
import Contact from "../components/Contact/Contact"

import SEO from "../components/seo"
import "normalize.css"
import "../fonts/fonts.css"
import "../components/common/grid.css"
import Footer from "../components/Footer/Footer"

const IndexPage = () => (
  <>
    <SEO title="Emailmatrix" />
    <Header />
    <main>
      <Offer />
      <Counter />
      <Services />
      <Views />
      <Elephants />
      <Reviews />
      <Whois />
      <Success />
      <Blog />
      <Contact />
    </main>
    <Footer />
  </>
)

export default IndexPage
