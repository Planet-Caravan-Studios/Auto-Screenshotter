---
title: "README"
date: "2022-08-03"
author: "Alec Reimel"

image: "/images/hm-hero-img.jpg"
previewText: "Copy of this project's readme file"
---

# README

---

## Project-Specific Notes
* Project-specific notes go here.

### Server Links
* Local: [http://localhost:3000/](http://localhost:3000/)
* Staging: [https://planet-caravan-simple-blog-template.netlify.app/](https://planet-caravan-simple-blog-template.netlify.app/)
* Live: 

---

## Planet Caravan Simple Blog Template


### Best Practices
* Use lots of comments and documentation
* Keep your tabs lined up correctly
* Follow HTML5 element heirarchy
* Double check your title tags and favicon
* Store your local project in a regular folder with no cloud syncing - this can cause issues with running/building the project

### Initialize
* Use Node v16.13.0 - use NVM or another node version manager to set this.
* run `npm install`
* run `npm run dev` - start and serve commands are the same as this by default, customize them if you need to.

### Update Test/Staging Server
This site uses Netlify's auto-deploy functions.  Every time you push to your main branch, Netlify will auto-deploy for you.  


#### Page Links
* [http://localhost:3000/](http://localhost:3000/) - Index/Home
* [http://localhost:3000/posts](http://localhost:3000/posts) - Blog posts directory
	- You can also rename this as "news" by changing the associated folder, file, and variable names.
* [http://localhost:3000/posts/master-post](http://localhost:3000/posts/master-post) - Post master template
	- Update to suit the needs of your project, and keep a clean version to copy from.
* [http://localhost:3000/events](http://localhost:3000/events) - Clone of the Blog section
	- The blog funstions can be cloned, renamed, and reused for things like events, products, people, etc.


### Assets Checklist
When you start the project, check in with the projects's Analyst for the following:  
* Font files
* Logo(s) - as PNGs
* Favicon - you can usually resize the logo for this
* Figma/PSD of the design to export individual assets
* Legal copy/links
* Social links

### Plugin/Library Links
* [react-icons](https://react-icons.github.io/react-icons)
* [swiper](https://swiperjs.com/)
* [normalize.css](https://necolas.github.io/normalize.css/)
* [react-headroom](https://kyleamathews.github.io/react-headroom/)

### Coming Features
* Contact page
* About page - == In Progress ==
* [Arbitrary JSON data usage](https://vercel.com/guides/loading-static-file-nextjs-api-route) - == Complete ==
* [Category and tag filtering on blog pages](https://retool.com/blog/filtering-data-in-react-filter-map-and-for-loops/)
* lodash - js utility library
* browsersync - sync multiple browser windows
* Form integration - netilfy forms

### Article Links
* [Set up Google Analytics with react-ga](https://medium.com/@cooperwfloyd/the-most-simple-way-to-track-next-js-page-views-in-google-analytics-8a5c6d981f43)