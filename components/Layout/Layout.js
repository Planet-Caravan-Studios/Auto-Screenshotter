/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import $ from 'jquery'

/*===== Theme Components =====*/
import DesktopNav from '@components/NavigationComponents/DesktopNav'
import NavMenu from '@components/NavigationComponents/NavMenu'
import Footer from '@components/NavigationComponents/Footer'
import Container from '@components/Container'

/*===== Styles =====*/
import styles from './styles.module.scss'

/*===== Data =====*/
//import data from "@data/data.json"
//export const siteTitle = 'Next.js Sample Website'
//export const siteData = data

/*===== JSON Page Content =====*/
import siteData from "@data/siteData.json"

export default function Layout({ children, home }) {
  
  /*useEffect(() => {
    $(document).ready(function() {
      smoothLoad();

      function smoothLoad(){
        let bufferTime = 250;
        setTimeout(function() { 
            $("#LayoutOuter").attr("data-hidden", "false");
        }, bufferTime);
      }
    });
  });*/

  return (
    <div id="LayoutOuter" className={styles.outer} data-hidden="true">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Simple blog-style template for Planet Caravan Studios"
        />
        <meta property="og:image"
          content={`/images/planet-caravan-studios-logo.png`}
        />
        <meta name="og:title" content={siteData.siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>

      <DesktopNav/>
      <NavMenu/>
      

      {/* MAIN SECTION */}
      <main className={styles.main}>
        
          {/* BREADCRUMBS */}
          {/*{!home && (
            <Container>
              <div className={styles.backToHome}>
                <Link href="/">
                  <a>← Back to home</a>
                </Link>
              </div>
            </Container>
          )}*/}
          
          <div>
            {children}
          </div>
          
        
      </main>

      <Footer/>
      

    </div>
  )
}
