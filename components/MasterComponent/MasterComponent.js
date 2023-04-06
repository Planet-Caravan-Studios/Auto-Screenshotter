/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

/*===== Theme Components =====*/
import SubComponent from './SubComponent'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

export default function MasterComponent({ 
  //Props
  children, id, image, imgAlt, title, 
  backgroundColor, font,
}) {

  //JS Goes Here
  //console.log(author);
   useEffect(() => {});

  return (
    <div className={componentStyles.MasterComponent}>

      <p>
        MasterComponent - use this component as a base to clone new components from.  It has minimal styling, an example of a sub-component, and a handful of props and conditional rendering examples.  Just copy this component's folder and rename everything.
      </p>
      <hr/>

      <p>Conditional Rendering - Use IF/ELSE statements in your HTML/JSX code.  Only show an element if a prop is present, or show a different element.</p>

      {/* Conditional Rendering - IF */}
      {title &&
        <p className={componentStyles.title}>
          {title}
        </p>
      }

      {/* Conditional Rendering - IF/ELSE */}
      {title ?
        <p className={componentStyles.author}>
          {title}
        </p>
        :
        <p className={componentStyles.title}>
          No Title prop
        </p>
      }
      
      {/* Image - Conditional Render */}
      {image ? 
         <div className={componentStyles.image}>
          <Link className={componentStyles.imgLink} href={`/posts/${id}`} passHref>
            <a>
              <img src={image} alt={imgAlt ? imgAlt : ""} />
            </a>
          </Link>
        </div>
        :
        <div className={componentStyles.image}>
          No Image prop
        </div>
      }

      <hr/>

      {/* data-attr styling */}
      <div 
        className={componentStyles.dataAttrTest}
      >
        <p>Children Prop - this prop is reserved in Next.js and is meant for general HTML/JSX/other components. </p>
        {children}
      </div>

      <hr/>

      {/* data-attr styling */}
      <div 
        className={componentStyles.dataAttrTest}
        data-bg-color={backgroundColor}
        data-font={font}
      >
        <p>Data-Attr Props - set data-attr values with props and use them as SCSS and JS selectors.  They're a good way to dynamically set styles or function values.</p>
      </div>

      <hr/>

      <p>Links - use the Next.js 'Link' component instead of the usual 'a' tag.  It performs several background functions for you, like preloading the page you're linking to.</p>
      {/* Link Example */}
      <Link href={`/`} passHref>
        <a 
          className={componentStyles.title}
          target=""
        >
          Home
        </a>
      </Link>
        
    </div>
  )
}
