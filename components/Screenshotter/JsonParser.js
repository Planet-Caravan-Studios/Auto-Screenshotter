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
   const [pages, setPages] = useState([]);

    useEffect(() => {
      const fetchPages = async () => {
        const response = await fetch('/pages.json');
        const data = await response.json();
        setPages(data);
      };

      fetchPages();
    }, []);

  return (
    <div>
      {pages.map((page, index) => (
        <div key={index}>{page.url}</div>
      ))}
    </div>
  )
}
