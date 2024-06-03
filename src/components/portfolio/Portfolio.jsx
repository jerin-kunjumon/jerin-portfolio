import "./portfolio.css";

import IMG1 from "../../assets/holiday-trip.png";
import IMG2 from "../../assets/Lunar-calendar.png";
import IMG3 from "../../assets/Tic-tac-toe.png";
import IMG4 from "../../assets/Sticky-Notes-App.png";
import IMG5 from "../../assets/currency-converter.png";
import IMG6 from "../../assets/weather-app.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Holiday Trip",
      img: IMG1,
      description:
        "It is the website for chosing your perfect destination for a weekend/holiday",
      technologies: "React.js | TailwindCSS",
      link: "https://curious-toffee-f366db.netlify.app",
    },
    {
      id: 2,
      title: "Lunar Calendar",
      img: IMG2,
      description:
        "Calendar based on the lunar cycles of the moon. Also has an in-built event saving mechanism.",
      technologies: "React.js | PostCss | TailwindCSS | MongoDb | Express",
      link: "https://github.com/jerin-kunjumon/Lunar-Calendar",
    },
    {
      id: 3,
      title: "Tic tac toe",
      img: IMG3,
      description:
        "The classic Tic Tac Toe game !",
      technologies: "Html | CSS | Javascript",
      link: "https://github.com/jerin-kunjumon/Tic-tac-toe-game",
    },
    {
      id: 4,
      title: "Sticky Notes App",
      img: IMG4,
      description:
        "Get started with free educational courses to mastery the foundations of startup equity as an African business.",
      technologies: "React.js | Tailwindcss | Express | Mongo",
      link: "https://github.com/jerin-kunjumon/TechNotes-App-backend",
    },
    {
      id: 5,
      title: "Currency Converter App",
      img: IMG5,
      description:
        "Convert any currency into your local one by a simple click !",
      technologies: "React | Vite | Material UI",
      link: "https://github.com/jerin-kunjumon/currency-converter",
    },
    {
      id: 6,
      title: "Weather App",
      img: IMG6,
      description:
        "Get the live weather updates from any of the major cities in the world !",
      technologies: "Html | CSS | Javascript",
      link: "https://github.com/jerin-kunjumon/weather-app",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo / Github Link
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
