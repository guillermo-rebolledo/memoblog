---
path: styling-with-react
date: 2020-09-03T21:25:07.174Z
title: Styling React Applications
description: Different alternatives to style a React application and their pros and cons.
---
## Introduction

Nowadays **React** has become one of the most if not the most popular libraries to build user interfaces for the web. In most cases, the community already has a set of best practices and conventions for most of the things that you can do with React, however, some other aspects are up to the developers, such as styling. 

In this entry, I'm gonna show you the most popular alternatives you have to style your React application. Please note that I'm assuming that you are using **CRA** (create-react-app) to setup your project, some of the instructions may vary depending on what you use. With that said let's jump into it. 👀

## Styling Alternatives

Let's go over the different alternatives that are available to us, or at least the most popular ones:

### Plain CSS/SASS

CSS or SCSS Stylesheets is a styling strategy that involves the use of external CSS or SASS stylesheets that can be imported into your React components depending on where you need the styling to be applied.

#### To use CSS:

* Import the CSS file in the desired component.
* Use your selector in the component to match the CSS file. If you are using classes, use className as the prop name.

#### To use SASS:

* If you are using CRA, you need to install the **node-sass** package from npm. `npm install node-sass`
* Rename your existing (if applicable) stylesheets from the `.css` extension to `.scss`
* Use your selector in the component to match the CSS file. If you are using classes, use className as the prop name.

#### Pros:

**Caching & Performance**

Standard CSS files are easy for the browser to optimize for, caching the files locally for repeat visits, and ultimately giving performance wins.

**Un-opinionated and Universal**

CSS and SASS is universal and has no opinion on how you render your UI making it a great choice for teams that have legacy CSS and are migrating over to a new framework or rebuilding their website or product.

**Quickly Iterate A New Design**

You can very easily rip out the entire stylesheet and create a new one to refresh the look and feel of your app without digging through potentially hundreds of components.

**CSS Frameworks**

CSS frameworks come in handy if you are a new developer, or you want to quickly work on a prototype without diving deep into writing your own full-blown stylesheets. CSS frameworks will provide you with building blocks to get your idea off the ground. Some of these frameworks include, Bootstrap, Bulma, Semantic UI, Materialize.

#### Cons:

**Readability**

If not properly structured, a CSS or SASS stylesheet can become long and difficult to navigate through as the application becomes complex.

**Legacy CSS Can Live On For Years**

Most times these really large stylesheets can become so complex and long that cleaning up old, outdated or even unused styles can be a pain.



#### Examples

https://codesandbox.io/s/react-cert-styling-css-stylesheets-hsrtd?fontsize=14&hidenavigation=1&theme=dark

