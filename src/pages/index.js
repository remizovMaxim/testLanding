import React from "react"
import Header from "../components/Header/Header"
import Offer from "../components/Offer/Offer"
import Counter from "../components/Counter/Counter"
import Services from "../components/Services/Services"
import Views from "../components/Views/Views"
import Button from "../components/common/Button/Button"

import SEO from "../components/seo"
import "normalize.css"
import "../fonts/fonts.css"
import "../components/common/grid.css"

const IndexPage = () => (
  <>
    <SEO title="Emailmatrix" />

    <Header />

    <Offer />

    <Counter />

    <Services />

    <Views />

    <Button linkBtn="#" linkText="Больше о нас" linkType="btn-green" />
    <Button linkBtn="#" linkText="Больше о нас" linkType="btn-green-full" />
  </>
)

export default IndexPage
