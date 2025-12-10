# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Focus areas](#focus-areas)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![Desktop](./screenshot-desktop.png)
![Tablet](./screenshot-tablet.png)
![Mobile](./screenshot-mobile.png)

### Links

- Solution URL: [GitHub Link](https://github.com/rickMcGavin/Pod-request-access-landing-page)
- Live Site URL: [Netlify Link](https://glittery-bubblegum-d30a37.netlify.app/)

## My process

### Built with

- HTML5
- CSS
- JavaScript

### Focus areas

When I take on a small project like this, the intent is often the same: stay sharp on CSS and layout skills. Also, it had been a while since I did a frontend project just for fun and my own edification. It's nice to do a small project like this sometimes just for an easy win and a small confidence boost.

This time I chose not to do my normal React stack, even thought I always use it regardless. I chose to use something more appropriate for the challenge. I went with plain HTML, CSS, and JavaScript. I also used the LiveServer extension in VSCode to make development easier.

### What I learned

One of my favorite learnings while building this was using box-shadow for the active and error outlines of the input. Instead of having it work like a shadow, we have it work like a 2 pixel border. It has a little bit of space around the input. It looks real slick. I'm definitely going to look for more places to use it.

```css
.email:focus-visible {
  box-shadow: 0 0 0 2px var(--color-green);
}

.email--error {
  box-shadow: 0 0 0 2px var(--color-red);
}
```

## Author

- Website - [Rick McGavin](https://rickmcgavin.dev)
- Frontend Mentor - [@rickMcGavin](https://www.frontendmentor.io/profile/rickMcGavin)
- X - [@RickMcGavin](https://www.x.com/rickmcgavin)
