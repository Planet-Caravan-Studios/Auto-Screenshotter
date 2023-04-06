/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

/*===== Theme Components =====*/
import SubComponent from './SubComponent'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

export default function PlaceholderContent({ 
  //Props
  children, id, image, imgAlt, title, 
  backgroundColor, font,
}) {

  //JS Goes Here
  //console.log(author);
   useEffect(() => {});

  return (
    <div className={componentStyles.PlaceholderContent}>
    {children ? children : "[Placeholder Content]"}        
    </div>
  )
}
