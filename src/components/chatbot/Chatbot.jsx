import React, { useState, useRef, useEffect } from 'react';
import './chatbot.css';
import { BsChatDots, BsX, BsSend } from 'react-icons/bs';

const SYSTEM_PROMPT = `
You are an AI assistant for Nivin Mathew S's personal website. Your goal is to answer visitors' questions about Nivin based on the following profile. Be professional, friendly, and concise.

# Nivin Mathew S - Profile

## 1. Personal Information
* **Name:** Nivin Mathew S
* **Age:** 23
* **Gender:** Male
* **From:** Kerala, India (Raised in Bangalore)
* **Languages:** English, Malayalam (preferred), Hindi (basic)
* **Relationship:** Has a Nepali girlfriend

## 2. Education
* **B.E. in Computer Science Engineering**, MVJ College of Engineering, Bangalore (CGPA: 7.8)
* Active in tech clubs & student developer communities.

## 3. Professional Profile
* **Frontend Developer**: React.js, JavaScript, HTML, CSS, Material-UI, Git, GitHub, Figma.
* **Experience**: Freelance Web Developer (25 months) - Built static, responsive websites.

## 4. Skills
* **Tech**: Java, JavaScript, React.js, HTML, CSS, Bootstrap, Material-UI, Figma, Git.
* **ML/DS**: Regression, Ensemble learning, PCA, Clustering.
* **Interests**: Machine Learning, Frontend Dev, Self-improvement.

## 5. Projects
* Supermarket Analytics Tool (React.js, D3.js)
* College Recommendation System
* Shopping Cart App
* GitHub User Finder

## 6. Goals & Values
* **Fitness**: Losing weight (Goal: lose 30kg in 4 months).
* **Social**: Passionate about social welfare, poverty alleviation, and building shelter homes.
* **Mission**: Promote compassion and dignity.

## 7. Contact/Other
* Prefers communicating in Malayalam if asked.
* Currently attending Vidya classes.

Answer questions as if you are a helpful assistant representing Nivin. If asked about something not in this profile, politely say you don't have that information.
`;

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "Hi! I'm Nivin's AI assistant. Ask me anything about him!" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // Check for Groq API Key first, then OpenAI
            const apiKey = process.env.REACT_APP_GROQ_API_KEY || process.env.REACT_APP_OPENAI_API_KEY;
            const isGroq = !!process.env.REACT_APP_GROQ_API_KEY;

            if (!apiKey) {
                throw new Error("API Key not found. Please set REACT_APP_GROQ_API_KEY in your .env file.");
            }

            const baseURL = isGroq
                ? 'https://api.groq.com/openai/v1/chat/completions'
                : 'https://api.openai.com/v1/chat/completions';

            const model = isGroq ? "llama3-8b-8192" : "gpt-3.5-turbo";

            const response = await fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: model,
                    messages: [
                        { role: "system", content: SYSTEM_PROMPT },
                        ...messages,
                        userMessage
                    ]
                })
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error.message);
            }

            const botMessage = {
                role: 'assistant',
                content: data.choices[0].message.content
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: `Error: ${error.message}. Please check your API key.`
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chatbot-container">
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h3>Chat with Nivin's AI</h3>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>
                            <BsX />
                        </button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.role === 'user' ? 'user' : 'bot'}`}>
                                {msg.content}
                            </div>
                        ))}
                        {isLoading && <div className="typing-indicator">Typing...</div>}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="chatbot-input" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Ask something..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading}>
                            <BsSend />
                        </button>
                    </form>
                </div>
            )}

            <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <BsX /> : <BsChatDots />}
            </button>
        </div>
    );
};

export default Chatbot;
