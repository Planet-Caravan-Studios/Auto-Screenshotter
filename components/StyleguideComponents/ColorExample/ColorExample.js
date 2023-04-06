/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

/*===== Theme Components =====*/
import SubComponent from './SubComponent'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

export default function ColorExample({ 
  //Props
  children, color, colorVar, namedColorVar
}) {

  //JS Goes Here
  //console.log(author);
   useEffect(() => {});

  return (
    <div 
      className={componentStyles.ColorExample}
      data-color={colorVar}
      style={{ backgroundColor: color }}
    >
      <p>Hex: {color && color}</p>
      <p>Var: {colorVar && colorVar}</p>
      {namedColorVar && 
        <p>
          <hr/>
          Named Vars: {namedColorVar}
        </p>
      }
    </div>
  )
}
