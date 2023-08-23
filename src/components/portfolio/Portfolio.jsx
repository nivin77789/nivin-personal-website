import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Sales Dashboard & Data Visualization",
    github: "https://github.com/nivin77789/revolve3",
    demo: "https://revolve3-3apwbceis-nivin77789.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Responsive website using react",
    github: "https://github.com/nivin77789/revolve-website",
    demo: "https://revolve-website-nr2uf8pbe-nivin77789.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "College recommendation system ",
    github: "https://github.com/nivin77789/crs",
    demo: "https://crs-ovtwflr06-nivin77789.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Shopping cart website",
    github: "https://github.com/nivin77789/shoping-cart-l",
    demo: "https://shopping-cart-81kf2ce93-nivin77789.vercel.app/shop",
  },
  {
    id: 5,
    image: IMG5,
    title: "Todolist web application",
    github: "https://github.com/nivin77789/todo-list",
    demo: "https://todo-list-n19cuqt6t-nivin77789.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Github user finder",
    github: "https://github.com/nivin77789/todolist",
    demo: "https://github-user-finder-dxapyhoqu-nivin77789.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="top-club">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
              </div>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
