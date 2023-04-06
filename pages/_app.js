import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import 'normalize.css';

//Swiper.JS
import 'swiper/swiper.scss';
import 'swiper/components/a11y/a11y.scss';
import 'swiper/components/controller/controller.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/thumbs/thumbs.scss';

//Custom CSS/JS
import '@styles/main.scss'
import '@scripts/script.js';

export default function App({ Component, pageProps }) {

  useEffect(() => {

    /* ============================= */
    /* ===== Simple Autoscroll ===== */
    /* ============================= */
      // Add a click event listener to all links on the page
      /*document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent default link behavior

          // Get the target element by its ID
          const targetElement = document.querySelector(this.getAttribute('href'));

          // If the target element exists, scroll to it
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });*/

      $(document).ready(function() {
        smoothLoad();

        function smoothLoad(){
          let bufferTime = 250;
          setTimeout(function() { 
              $("#LayoutOuter").attr("data-hidden", "false");
          }, bufferTime);
        }
      });

      /* =====END useEffect ===== */
    });

  return <Component {...pageProps} />
}
