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

export default function Posts({ allPostsData }) {
  return (
    <Layout home>
      
      <Head>
        <title>Posts | {siteData.siteTitleBase}</title>
      </Head>

      <section className={pageStyles.headingMd}>
        <Container>
          <p>
            Posts Directory Page
          </p>
        </Container>
      </section>

      <section className={`${pageStyles.headingMd} ${pageStyles.padding1px}`}>
        <Container>
          
          <h2 className={pageStyles.headingLg}>Blog</h2>
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