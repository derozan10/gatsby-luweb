import React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/Hero';
import Succes from '../components/Succes';
import Cards from '../components/Cards';
import CTA from '../components/CTA';
import SEO from '../components/SEO'

const index = () => {
  return (
    <Layout>
      <SEO title="Web development is onze passie."/>
        <Hero />
        <Succes />
        <Cards />
        <CTA />
    </Layout>
  )
}

export default index
