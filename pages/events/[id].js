/*===== Utility Components =====*/
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Date from '@components/BlogComponents/date'

/*===== Theme Components =====*/
import Layout from '@components/Layout'
import BlogPreview from '@components/BlogComponents/BlogPreview'
import Container from '@components/Container'

/*===== Styles =====*/
import pageStyles from '@styles/pages.module.scss'

/*===== JSON Page Content =====*/
import siteData from "@data/siteData.json"
//import pageData from "@data/pageIndex.json"

/*===== Post Data =====*/
import { getAllPostIds, getPostData } from '@lib/events'

export default function Event({ postData }) {
  return (
    <Layout>
      
      <Head>
        <title>{postData.title} | {siteData.siteTitleBase}</title>
      </Head>

      <Container>
        <article>
          <h1 className={pageStyles.headingXl}>
            {postData.title}
          </h1>
          <div className={pageStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Container>

    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
