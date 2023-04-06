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
        <title>Home | {siteData.siteTitleBase}</title>
      </Head>

      <Container>
        
        <section className={pageStyles.textSection}>
          <h1>SIMPLE BLOG TEMPLATE</h1>
          <p>
            <mark>Planet Caravan Studios Simple Blog</mark> - this is a template meant to be very basic and barebones, allowing you to apply your own styles and content.  We've built out plenty of components for you to build on top of and customize.  We've used a simple black and white style across the template, so you don't have to spend time cleaning out styles that don't work for you.
          </p>
        </section>

        <section className={pageStyles.textSection}>
          <h2>Global Site Data</h2>
          <p>
            Want to build out your content via JSON files?  Import a JSON file from the <mark>/data/</mark> folder, and place the variables in your pages to make "fill in the blanks" style content.
          </p>

          <br/>
         
          <codeblock>
            /*===== JSON Page Content =====*/<br/>
            import siteData from "@data/siteData.json"<br/>
            import pageData from "@data/pageIndex.json"<br/>
          </codeblock>
          
          <br/><br/>

          <ul>
            <li>
              Title: <mark>{siteData.title}</mark>
            </li>
            <li>
              Description: <mark>{siteData.description}</mark>
            </li>
            <li>
              Author: <mark>{siteData.author}</mark>
            </li>
            <li>
              Organization: <mark>{siteData.organization}</mark>
            </li>
            <li>
              Github: <mark>{siteData.organizationGithub}</mark>
            </li>
          </ul>
          
          <br/>    

          <p>This method can be reused for individual page content as well.  Just make a new JSON file in the <mark>/data/</mark> folder and import it like in the Layout component.  In the future, more complex methods will be prebuilt.</p>
        </section>

        <hr/>
        <br/>
        <br/>
        
        <section className="">
          <h3 className={pageStyles.headingLg}>Blog Feed</h3>
          <p>The blog for this project is powered by simple Markdown files using frontmatter for variables.  Simply create/modify/delete files in the <mark>/posts/</mark> folder.  A clone of the blog posts has been made in the <mark>/events/</mark> folder, to show you that the blog functionality can be cloned and rebranded as another function.</p>
          <br/>
          <p>The blog functionality, along with it's clone in the events functions, can be renamed to anything that requires dynamic content - such as products, people, etc.  You can also make as many clones of these functions as you'd like for whatever purposes you need.</p>

          <br/>
          <hr/>
          <br/>

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
        </section>

      </Container>
    </Layout>
  )
}


