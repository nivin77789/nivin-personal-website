import React, { useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/p1.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Studio Glow - Booking & Course Enrollment",
    description: "Full-featured booking application for studio services and course enrollments with user management and scheduling.",
    technologies: ["React", "TypeScript", "Tailwind", "Firebase"],
    github: "https://github.com/nivin77789/studio-glow-vue",
    demo: "https://studio-glow-vue.vercel.app/",
    category: "freelance"
  },
  {
    id: 2,
    image: IMG2,
    title: "Responsive website using react",
    description: "Modern, fully responsive website with smooth animations and mobile-first design.",
    technologies: ["React", "JavaScript", "Responsive Design"],
    github: "https://github.com/nivin77789/revolve-website",
    demo: "https://revolve-website.vercel.app/",
    category: "web"
  },
  {
    id: 3,
    image: IMG3,
    title: "College recommendation system",
    description: "Smart recommendation engine to help students find the best colleges based on their preferences.",
    technologies: ["React", "API Integration", "CSS"],
    github: "https://github.com/nivin77789/crs",
    demo: "https://crs-ovtwflr06-nivin77789.vercel.app/",
    category: "datascience"
  },
  {
    id: 4,
    image: IMG4,
    title: "Shopping cart website",
    description: "E-commerce platform with product catalog, cart functionality, and checkout flow.",
    technologies: ["React", "Context API", "Local Storage"],
    github: "https://github.com/nivin77789/shoping-cart-l",
    demo: "https://shopping-cart-81kf2ce93-nivin77789.vercel.app/shop",
    category: "web"
  },
  {
    id: 5,
    image: IMG5,
    title: "Todolist web application",
    description: "Task management app with add, edit, delete, and filter functionality.",
    technologies: ["React", "Hooks", "CSS3"],
    github: "https://github.com/nivin77789/todo-list",
    demo: "https://todo-list-n19cuqt6t-nivin77789.vercel.app/",
    category: "web"
  },
  {
    id: 6,
    image: IMG6,
    title: "Github user finder",
    description: "Search and display GitHub user profiles with repository information using GitHub API.",
    technologies: ["React", "GitHub API", "REST API"],
    github: "https://github.com/nivin77789/todolist",
    demo: "https://github-user-finder-dxapyhoqu-nivin77789.vercel.app/",
    category: "web"
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "freelance", label: "Freelance" },
    { id: "web", label: "Web Development" },
    { id: "datascience", label: "Data Science" }
  ];

  const filteredData = activeCategory === "all" 
    ? data 
    : data.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__categories">
        {categories.map(({ id, label }) => (
          <button
            key={id}
            className={`category__btn ${activeCategory === id ? "category__btn--active" : ""}`}
            onClick={() => setActiveCategory(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="container portfolio__container">
        {filteredData.map(({ id, image, title, description, technologies, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="top-club">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p className="portfolio__item-description">{description}</p>
                <div className="portfolio__item-technologies">
                  {technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
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