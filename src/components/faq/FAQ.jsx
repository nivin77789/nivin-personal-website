import React, { useState } from 'react';
import './faq.css';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { FaQuestion } from 'react-icons/fa';

const FAQData = [
    {
        question: "What tech stack do you specialize in?",
        answer: "I specialize in the MERN stack (MongoDB, Express, React, Node.js) along with modern frontend tools like Tailwind CSS, Framer Motion, and Three.js for immersive 3D experiences."
    },
    {
        question: "Do you take on freelance projects?",
        answer: "Yes, I am available for freelance work. Whether it's a full-stack web application, a landing page, or a complex UI/UX design implementation, I'm happy to discuss your project."
    },
    {
        question: "What is your design process?",
        answer: "My process starts with understanding the client's vision and requirements. I then move to wireframing and prototyping before writing clean, scalable code. I prioritize user experience and performance at every step."
    },
    {
        question: "How do you handle project deadlines?",
        answer: "I believe in transparent communication and realistic planning. I break down projects into milestones and keep clients updated regularly to ensure timely delivery without compromising quality."
    },
    {
        question: "Can you help with SEO and performance optimization?",
        answer: "Absolutely! I implement best practices for SEO (semantic HTML, meta tags, SSR/SSG) and optimize performance (lazy loading, code splitting, image optimization) to ensure your site ranks well and loads fast."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq">
            <h5>Common Queries</h5>
            <h2>Frequently Asked Questions</h2>

            <div className="container faq__container">
                <div className="faq__graphics">
                    <div className="faq__icon-container">
                        <FaQuestion className="faq__main-icon" />
                    </div>
                    <div className="faq__circle circle-1"></div>
                    <div className="faq__circle circle-2"></div>
                </div>

                <div className="faq__list">
                    {FAQData.map((item, index) => (
                        <article
                            key={index}
                            className={`faq__item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq__question">
                                <h4>{item.question}</h4>
                                <div className="faq__icon">
                                    {activeIndex === index ? <FiMinus /> : <FiPlus />}
                                </div>
                            </div>
                            <div className="faq__answer">
                                <p>{item.answer}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
