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
import pageStyles from '@styles/posts.module.scss'

/*===== JSON Page Content =====*/
import siteData from "@data/siteData.json"
//import pageData from "@data/pageIndex.json"

/*===== Post Data =====*/
import { getAllPostIds, getPostData } from '@lib/posts'

export default function Post({ postData }) {
  return (
    <div className={pageStyles.articlePage}>
      <Layout>
        <Head>
          <title>{postData.title} | {siteData.siteTitleBase}</title>
        </Head>
        <Container>
          <article>
            <div className={pageStyles.articleMetaData}>
              <h1>{postData.title}</h1>
              <p>Author: {postData.author}</p>
              <p>Posted: <Date dateString={postData.date} /></p>
            </div>
            <div className={pageStyles.articleContent}>
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />  
            </div>
            
          </article>
        </Container>
      </Layout>
    </div>
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
