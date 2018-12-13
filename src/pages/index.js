import React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/Hero';
import Succes from '../components/Succes';
import Cards from '../components/Cards';
import CTA from '../components/CTA';

// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar';
// import Backdrop from '../components/Backdrop';

const index = () => {
  return (
    <Layout>
        <Hero />
        <Succes />
        <Cards />
        <CTA />
    </Layout>
  )
}

export default index
