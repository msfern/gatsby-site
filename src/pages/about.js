import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>A bit about me...</h1>
      <p>I'm 30 years old</p>
      <p>I have 2 guinea pigs</p>
      <p>I'm trying to be one of the best front-end developers out there</p>
      <p>Interested? <Link to="/contact">Get in touch!</Link></p>
    </Layout>
  )
}

export default AboutPage