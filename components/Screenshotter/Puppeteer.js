/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import puppeteer from 'puppeteer';

/*===== Theme Components =====*/


/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function Puppeteer({ 
  //Props
  children, id, title, image, imgAlt, 
  backgroundColor, font, 
}) {
  const [pages, setPages] = useState([]);

    useEffect(() => {
      const fetchPages = async () => {
        const response = await fetch('/pages.json');
        const data = await response.json();
        setPages(data);

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        for (const pageData of data) {
          await page.goto(pageData.url);
          const screenshot = await page.screenshot({ fullPage: true });
          await saveScreenshot(pageData.url, screenshot);
        }

        await browser.close();
      };

      const saveScreenshot = async (url, screenshot) => {
        const response = await fetch('/api/save-screenshot', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url, screenshot: screenshot.toString('base64') })
        });
        const data = await response.json();
        console.log(data);
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
