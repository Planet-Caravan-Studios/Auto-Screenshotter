/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

/*===== Theme Components =====*/


/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function SubComponent({ 
  //Props
  children, id, title, image, imgAlt, 
  backgroundColor, font, 
}) {

  //JS Goes Here
  //console.log(title);
   useEffect(() => {});

  return (
    <div 
      className={componentStyles.SubComponent}
      data-bg-color={backgroundColor}
    >
      {children ? children : "SubComponent Content"}
    </div>
  )
}
