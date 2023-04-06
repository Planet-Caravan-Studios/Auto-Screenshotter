/*===== Utility Components =====*/
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'

/*===== Theme Components =====*/
import Layout from '@components/Layout'
import Container from '@components/Container'
import FontExample from '@components/StyleguideComponents/FontExample'
import ColorExample from '@components/StyleguideComponents/ColorExample'
import PlaceholderContent from '@components/ContentComponents/PlaceholderContent'

/*===== Styles =====*/
import pageStyles from '@styles/pages.module.scss'

/*===== JSON Page Content =====*/
import siteData from "@data/siteData.json"
import pageData from "@data/pageIndex.json"

/*===== Posts Data =====*/
import { getSortedPostsData } from '@lib/posts'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

/*===== Page Content =====*/
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      
      <Head>
        <title>Styleguide | {siteData.siteTitleBase}</title>
      </Head>

        <div className={pageStyles.styleguide}>
          <section className={pageStyles.textSection}>
            <Container>
              <h1>STYLEGUIDE</h1>
              <hr/>
            </Container>
          </section>

          <section className={pageStyles.textSection}>
            <Container>
              <h2>Logos</h2>
              <div className={pageStyles.styleContainer}>
                <PlaceholderContent/>
              </div>
            </Container>
           </section>

          <section className={pageStyles.textSection}>
            <Container>
              <h2>Colors</h2>
              <p>
                Try to use only SCSS vars in your style code.  This way, you can change all instances of that color in one spot.  You can also use "named variables" like $primaryColor and $accentColor to more easily set the overall theme of the project.
              </p>
              <div className={pageStyles.styleContainer}>
                
                <ColorExample
                  color="#212121"
                  colorVar="$black"
                  namedColorVar="$primaryColor, $textColor"
                />

                <ColorExample
                  color="#CCCCCC"
                  colorVar="$lightGrey"
                />

                <ColorExample
                  color="#3F3F3F"
                  colorVar="$darkGrey"
                />

                <ColorExample
                  color="#FB0000"
                  colorVar="$red"
                />

                <ColorExample
                  color="#D96D01"
                  colorVar="$orange"
                  namedColorVar="$accentColor2"
                />

                <ColorExample
                  color="#BA4103"
                  colorVar="$darkOrange"
                  namedColorVar="$accentColor"
                />

              </div>
            </Container>
           </section>

           <section className={pageStyles.textSection}>
             <Container>
               <h2>Fonts &amp; Font Sizes</h2>
               <p>Similar to working with colors, try to always use SCSS variables to set fonts and font sizes.  This will let you swap out fonts and adjust font sizes across your project in seconds.</p>
               <div className={pageStyles.styleContainer}>
                <FontExample
                  font="body"
                  fontSize="detail"
                  sampleText="Lorem Ipsum 123"
                />
                <FontExample
                  font="body"
                  fontSize="body"
                  sampleText="Lorem Ipsum 123"
                />
                <FontExample
                  font="body"
                  fontSize="subhead"
                  sampleText="Lorem Ipsum 123"
                />
                <FontExample
                  font="body"
                  fontSize="heading"
                  sampleText="Lorem Ipsum 123"
                />
               </div>
             </Container>
            </section>

            <section className={pageStyles.textSection}>
              <Container>
                <h2>Links &amp; Buttons</h2>
                <div className={pageStyles.styleContainer}>
                  
                </div>
              </Container>
             </section>

             <section className={pageStyles.textSection}>
              <Container>
                <h2>Forms</h2>
                <div className={pageStyles.styleContainer}>
                  
                </div>
              </Container>
             </section>      

             <section className={pageStyles.textSection}>
               <Container>
                 <h2>PlaceholderContent</h2>
                 <p>Use this component to fill in missing content.</p>
                 <div className={pageStyles.styleContainer}>
                   <PlaceholderContent/>
                 </div>
               </Container>
              </section>

        </div>
      
    </Layout>
  )
}


