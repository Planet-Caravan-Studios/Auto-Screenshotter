/*===== Utility Components =====*/
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'

/*===== Theme Components =====*/
import Layout from '@components/Layout'
import Container from '@components/Container'
import HeroSection from '@components/ContentComponents/HeroSection'
import ContactForm from '@components/FormComponents/ContactForm'

/*===== Styles =====*/
import pageStyles from '@styles/pages.module.scss'

/*===== JSON Page Content =====*/
import siteData from "@data/siteData.json"
import pageData from "@data/pageAbout.json"

/*===== Page Content =====*/
export default function About({}) {
  return (
    <Layout>
      
      <Head>
        <title>About | {siteData.siteTitleBase}</title>
      </Head>
      
      <HeroSection
        heading={pageData.h1Title}
        subhead={pageData.bodyContent1}
        image={pageData.heroImage}
        backgroundFilter
      />

      <section className={pageStyles.textSection}> 
        <Container> 
          <ContactForm/>
        </Container>
      </section>

    </Layout>
  )
}