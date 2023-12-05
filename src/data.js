import recipeEats from "./assets/images/screenshot-recipeeats.png";
import fridgeRaider from "./assets/images/screenshot-fridgeraider.png";
import noteTaker from "./assets/images/screenshot-notetaker.png";
import ubetr from "./assets/images/screenshot-ubetr.png";
import techBlog from "./assets/images/screenshot-techblog.png";
import textEditor from "./assets/images/screenshot-texteditor.png";

export const PROJECTS = [
  {
    title: "U-Betr",
    description:
      "This is the third group project I worked on. It is a sports betting app that allows users to bet on real games using fake money. The user can see their betting history and current bets. This site was made with many pacgages including React, Tailwind CSS, DaisyUI, Express, GraphWL, and MongoDB.",
    image: ubetr,
    link: "https://rocky-hollows-26852-54ebc26e9935.herokuapp.com/",
    github: "https://github.com/natejmaster/sports-gambling-odds-comp",

  },
  {
    title: "Recipe Eats",
    description:
      "This is the second group project I worked on. It is a recipe review website using the MVC model. Users can create an account a post, edit, delete or comment on other post on the site. Feel free to make an account and check out the site for yourself. This site was made with many pacgages including bcrypt, express, express-handlebars, express-session, mysql2, sequelize, and dotenv.",
    image: recipeEats,
    link: "https://protected-escarpment-11572-48e550723f6b.herokuapp.com/",
    github: "https://github.com/KDonnelly33/Recipe-review",
  },

  {
    title: "Fridge Raider",
    description:
      "This is my first group project i worked on. It focuses on using a third party API to search for recipes based on ingredients the user has on hand. The user can also save their favorite recipes using local storage. This project was built using Html, Javascript, Tailwind CSS and DaisyUI.",
    image: fridgeRaider,
    link: "https://natejmaster.github.io/recipe-finder/",
    github: "https://github.com/natejmaster/recipe-finder",
  },

  {
    title: "Note Taker",
    description:
      "An app that allows users to create, save, edit and delete notes. This project was built using Html, Javascript, CSS, Node.js, Express.js and Heroku.",
    image: noteTaker,
    link: "https://quiet-reaches-92554-e8eb33b3297a.herokuapp.com/",
    github: "https://github.com/KDonnelly33/note-taker",
  },

  {
    title: "Tech Blog",
    description:
      "A CMS-style blog site where developers can publish their blog posts and comment on other developers posts as well. This project was built using the MVC model and uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
    image: techBlog,
    link: "https://safe-stream-61726-216214b7671d.herokuapp.com/",
    github: "https://github.com/KDonnelly33/tech_blog",
  },

  {
    title: "Text Editor",
    description:
      "This is a text editor. In this project I was given working code and it was my job to make it a progressive web application. I used webpack, service workers and webpack manifest to make this happen.",
    image: textEditor,
    link: "https://guarded-earth-62670-6a761cccfbb9.herokuapp.com",
    github: "https://github.com/KDonnelly33/text-editor",
  },
];
