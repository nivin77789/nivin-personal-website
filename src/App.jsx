import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
// import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import FAQ from "./components/faq/FAQ";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Gitabout from "./components/about/Git-about";
import Background from "./components/background/Background";
import Chatbot from "./components/chatbot/Chatbot";
const App = () => {
  // Scroll Animation Logic
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .zoom-in");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      <Background />
      <Chatbot />
      <Header />
      <Nav />
      <div className="reveal">
        <About />
      </div>
      <div className="reveal-left">
        <Gitabout />
      </div>
      <div className="reveal-right">
        <Experience />
      </div>
      {/* <Services /> */}
      <div className="zoom-in">
        <Portfolio />
      </div>
      <div className="reveal">
        <Testimonials />
      </div>
      <div className="reveal-left">
        <FAQ />
      </div>
      <div className="reveal-right">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
