# Front End Mentor - Project 030 - Interactive Pricing Component

This is a solution to the [Interactive Pricing Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Screenshot

- Desktop

![](./screenshot-desktop.png)

- Mobile

![](./screenshot-mobile.png)

### Links

- Solution URL: https://github.com/rashidshamloo/fem_030_interactive-pricing-component/
- Live Site URL: https://rashidshamloo.github.io/fem_030_interactive-pricing-component/

## My process

### Built with

- Vite / React.js
- TypeScript
- Material-UI
- SASS/SCSS
- Semantic HTML5 markup

### What I learned

- Setting up a global SCSS import in Vite to remove the need of using `@import` in every file
```javascript
css: {
  preprocessorOptions: {
    scss: {
      additionalData: '@import "./src/styles/colors";',
    },
  },
},
```
- Using `list-style-position:inside;` in CSS to bring the list bullet points inside the flow
- *In-depth* customization of Material-UI components
- Setting `aria-label` attribute for Material-UI components using `inputProps = {{ 'aria-label': 'LABEL' }}`

## Author

- Portfolio - [rashidshamloo.ir](https://www.rashidshamloo.ir)
- Frontend Mentor - [@rashidshamloo](https://www.frontendmentor.io/profile/rashidshamloo)
- Twitter - [@rashidshamloo](https://www.twitter.com/rashidshamloo)
