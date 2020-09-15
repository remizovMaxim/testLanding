import React from "react"
import Header from "../components/Header/Header"
import Offer from "../components/Offer/Offer"
import SEO from "../components/seo"
import 'normalize.css'
import '../fonts/fonts.css'
import '../components/common/grid.css'

const IndexPage = () => (
  <>
    <SEO title="Emailmatrix" />

    <Header />

    <Offer />
    
    
  </>
)

export default IndexPage
