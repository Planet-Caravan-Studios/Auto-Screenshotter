/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

/*===== Theme Components =====*/
import SubComponent from './SubComponent'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

export default function FontExample({ 
  //Props
  children, font, fontSize, 
  fontWeight, fontStyle, color, 
  sampleText, details
}) {

  //JS Goes Here
  //console.log(author);
   useEffect(() => {});

  return (
    <div 
      className={componentStyles.FontExample}
      data-font={font}
      data-font-size={fontSize}
      data-font-weight={fontWeight}
      data-font-style={fontStyle}
      data-font-color={color}
    >
      <div className={componentStyles.fontMeta}>
        <p>Font Name: "Roboto Mono"</p>
        <p>Var Name: ${font}</p>
        <p>Font Size: ${fontSize}</p>
      </div>
      <hr/>
      {sampleText && 
        <p>{sampleText}</p>
      }
    </div>
  )
}
