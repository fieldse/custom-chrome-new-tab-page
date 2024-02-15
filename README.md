# Chrome Local HTML file Homepage

A browser extension for Chrome that allows opening a custom HTML file as your new tab / startup page.

![](static/img/screenshot.png)

## Contents

- [Purpose](#purpose)
- [Customization](#customization)
- [Compatibility](#browser-compatibility)
- [Installation](#installation)
- [Technical details](#technical-details)
- [Customization](#Customization)
- [Maintainer](#maintainer)
- [Project](#project)
- [Credits](#credits)

## Purpose

I like to open a custom locally stored homepage when opening new browser tabs, instead of hitting a server every time,

Even with caching, this should be snappier than loading a remote page as your New Tab, and is more customizeable than the default Chrome/Brave browser New Tab page.

## Browser compatibility

Should work on recent versions of Chrome & Brave Browsers.

## Installation

1. Open `chrome://extensions` in your browswer, and click the Developer mode checkbox on the top right.
2. Click the "Load unpacked extension" button
3. Navigate to your folder and click select

## Technical details

Uses:

- Node 16
- TailwindCSS

## Customization

Build your own! You can customize the new new tab page or build your own from scratch.

Requirements:

- Node 16+

Steps:

1. Install: `npm install`
2. Start the styles builder: `npm run build:watch`
3. Modify the page: edit the contents of `/src/index.html` to your liking.

Styles are built to `/src/css/style.css`

## Maintainer

👋🏻 Matt Fields - hello@mattfields.dev

🚀 Hire me! I'm available for work.

## Project

- https://github.com/fieldse/custom-chrome-new-tab-page

## Credits

- Credit for inspiration for this project to [this answer](https://superuser.com/a/909595) at Stack Exchange
