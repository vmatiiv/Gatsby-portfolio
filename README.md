# Gatsby Portfolio ⚡️ [![GitHub](https://img.shields.io/github/license/vmatiiv/gatsby-portfolio?color=blue)](https://github.com/vmatiiv/gatsby-portfolio/blob/master/LICENSE.md) ![GitHub stars](https://img.shields.io/github/stars/vmatiiv/gatsby-portfolio) ![GitHub forks](https://img.shields.io/github/forks/vmatiiv/gatsby-portfolio)

## A clean, beautiful and responsive portfolio template for Developers

<h2 align="center">
  <img src="https://github.com/vmatiiv/gatsby-portfolio/blob/main/examples/example.gif" alt="Gatsby Portfolio" width="600px" />
  <br>
</h2>

## Features

⚡️ Modern UI Design + Reveal Animations\
⚡️ One Page Layout built with React\
⚡️ Styled with Bootstrap v4.3 + Custom SCSS\
⚡️ Fully Responsive\
⚡️ Image optimization with Gatsby\
⚡️ Easy site customization\
⚡️ Well organized documentation

To view a demo example, **[click here](https://gatsby-portfolio-example.netlify.com/)**


---



## How To Use 🔧

From your command line, first clone Portfolio:

```bash
# Clone this repository
$ git clone https://github.com/vmatiiv/gatsby-portfolio

# Go into the repository
$ cd gatsby-portfolio

# Remove current origin repository
$ git remote remove origin
```

Then you can install the dependencies either using NPM or Yarn:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm run develop
```

Using Yarn:

```bash
# Install dependencies
$ yarn

# Start development server
$ yarn develop
```

Once your server has started, go to `http://localhost:8000/` and you will see the website running on a Development Server:

<h2 align="center">
  <img src="https://github.com/vmatiiv/gatsby-portfolio/blob/main/examples/example.jpg" alt="Gatsby Portfolio" width="100%">
</h2>

---

## Instructions:

### Step 1 - STRUCTURE

Go to `/src/data/data.js` and fill your information, they are 5 objects:
### Technologies Section

Put as many technologies object you want inside the `array`.
```javascript
export const technologies = [
  {
    id:nanoid(),  
    title:"React", // optional field with title under the icon
    icon:<FaReact/>, // react-icons icon or your custom
    hover:"#52CFF6" //optional field with color if you want hover effect
  }
  ...
]
```


### Projects Section

**_Important Note_**: All the images must live inside the `src/images/` folder in order for Gatsby to show the images correctly.

Put as many projects object you want inside the `array`.

```javascript
export const projects = [
  {
    id:nanoid(),
    filename:"image.jpg",
    title:"Some Project", //project name
    technologies:"React,Angular,NodeJS...", //list of technologies that you use to create a project
    live:"https://localhost:8000", // url to your project, if no url, the button will not show up
    source:"https://localhost:8000",//url to source code,  if no repo, the button will not show up
    description:"" // Few words about the project
  }
  ...
]
```

### About Section

**_Important Note_**: All the images must live inside the `src/images/` folder in order for Gatsby to show the images correctly.

```javascript
export const about = {
  img: 'face.jpg', // put your profile image 
  text:[
    'p1',
    'p2',
    'p3'
    ] //Each element inside the array will create a paragraph
  resume: 'http://localhost:8000', // if no resume, the button will not show up
};
```

### Contact Section

```javascript
export const contacts = {
  email:"",
  phone:"",
  address:"",
  socials:[
    icon:<FaGithub/>, //react-icons icon or your custom
    url:"https://github.com/",
    hover:"#000" //optional field with color if you want hover effect
  ]
};
```

### Nav

```javascript
  export const nav = {
    logo:"Logo" //can be text,svg,img...
  }
```

### Step 2 - STYLES

Change the color theme of the website:

Go to `src/styles/_variables.scss` and  change the values on this classes `$light-section-color`, `dark-section-color` and `$grey-section-color` to your prefered HEX color

```scss
// Default values
$light-section-color: #fff;
$dark-section-color: #333333;
$grey-section-color:#eee;
```

## Deployment 📦

Once you have done with your setup. You need to put your website online!

I highly recommend to use [Netlify](https://netlify.com) to achieve this on the EASIEST WAY


## Technologies used 🛠️

- [Gatsby](https://www.gatsbyjs.org/) - Static Site Generator
- [GraphQL](https://graphql.org/) - Query language for APIs
- [React](https://es.reactjs.org/) - Front-End JavaScript library
- [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/) - Front-End UI library
- [Sass](https://sass-lang.com/documentation) - CSS extension language
- [React-icons](https://react-icons.github.io/react-icons/) - SVG icons

## Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/2365af6f-820a-4fb8-83e6-69a66f686dfe/deploy-status)](https://app.netlify.com/sites/gatsby-portfolio-example/deploys)

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
