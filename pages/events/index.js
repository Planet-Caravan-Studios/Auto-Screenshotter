/*===== Utility Components =====*/
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'

/*===== Theme Components =====*/
import Layout from '@components/Layout'
import BlogPreview from '@components/BlogComponents/BlogPreview'
import Container from '@components/Container'

/*===== Styles =====*/
import pageStyles from '@styles/pages.module.scss'

/*===== JSON Page Content =====*/
import siteData from "@data/siteData.json"
//import pageData from "@data/pageIndex.json"

/*===== Events Data =====*/
import { getSortedPostsData } from '@lib/events'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Events({ allPostsData }) {
  return (
    <Layout home>
      
      <Head>
        <title>Events | {siteData.siteTitleBase}</title>
      </Head>

      <section className={pageStyles.headingMd}>
        <Container>
          <h1>
            Events Directory Page
          </h1>
        </Container>
      </section>

      <section className={`${pageStyles.headingMd} ${pageStyles.padding1px}`}>
        <Container>
          
          <ul className={pageStyles.list}>
            
            {allPostsData.map(({ id, date, title, author, previewText, image }) => (
              <li className={pageStyles.listItem} key={id}>
                <BlogPreview
                  id={id}
                  image={image}
                  title={title}
                  previewText={previewText}
                  author={author}
                  date={date}
                />
              </li>
            ))}
          </ul>

        </Container>
      </section>
    </Layout>
  )
}