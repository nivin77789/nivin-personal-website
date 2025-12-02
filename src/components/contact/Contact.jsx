import React, { useState, useRef, useEffect } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const [step, setStep] = useState(0); // 0: name, 1: email, 2: message, 3: sending, 4: success
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { text: "Welcome to the contact terminal. Please follow the prompts.", isUser: false },
  ]);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
    inputRef.current?.focus();
  }, [history, step]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const getPrompt = () => {
    switch (step) {
      case 0:
        return "Enter Full Name:";
      case 1:
        return "Enter Email:";
      case 2:
        return "Enter Message:";
      default:
        return "";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!input.trim()) return;

      const currentPrompt = getPrompt();
      const val = input.trim();

      setHistory((prev) => [
        ...prev,
        { text: `${currentPrompt} ${val}`, isUser: true },
      ]);
      setInput("");

      if (step === 0) {
        setFormData((prev) => ({ ...prev, from_name: val }));
        setStep(1);
      } else if (step === 1) {
        setFormData((prev) => ({ ...prev, from_email: val }));
        setStep(2);
      } else if (step === 2) {
        const finalData = { ...formData, message: val };
        setFormData(finalData);
        setStep(3); // Sending
        sendEmail(finalData);
      }
    }
  };

  const sendEmail = (data) => {
    emailjs
      .send(
        "service_h48jfvt",
        "template_pj64jx2",
        data,
        "cqMYtPUlbKtkI2hWu"
      )
      .then(
        (result) => {
          setHistory((prev) => [
            ...prev,
            { text: "Message sent successfully! I'll get back to you soon.", isUser: false },
          ]);
          setStep(4);
        },
        (error) => {
          console.log(error.text);
          setHistory((prev) => [
            ...prev,
            { text: "Error sending message. Please try again.", isUser: false },
          ]);
          setStep(2); // Retry message
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option terminal-card">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <div className="terminal-title">email — bash</div>
            </div>
            <div className="terminal-body-static">
              <div className="terminal-line system-line">
                <span className="prompt-symbol">➜</span>
                <span className="cmd">contact --method email</span>
              </div>
              <div className="terminal-line output-line">
                <MdOutlineEmail className="contact__option-icon" />
                <h4>Email</h4>
                <h5>nivinmathews10@gmail.com</h5>
                <a href="mailto:nivinmathews10@gmail.com" className="terminal-link">
                  &gt; Send Message
                </a>
              </div>
            </div>
          </article>

          <article className="contact__option terminal-card">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <div className="terminal-title">whatsapp — bash</div>
            </div>
            <div className="terminal-body-static">
              <div className="terminal-line system-line">
                <span className="prompt-symbol">➜</span>
                <span className="cmd">contact --method whatsapp</span>
              </div>
              <div className="terminal-line output-line">
                <BsWhatsapp className="contact__option-icon" />
                <h4>WhatsApp</h4>
                <h5>+91 7975339228</h5>
                <a
                  href="https://wa.me/917975339228"
                  target="_blank"
                  rel="noreferrer"
                  className="terminal-link"
                >
                  &gt; Send Message
                </a>
              </div>
            </div>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <div className="terminal-container">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <div className="terminal-title">contact — -zsh — 80x24</div>
          </div>
          <div className="terminal-body" ref={terminalBodyRef} onClick={() => inputRef.current?.focus()}>
            {history.map((line, index) => (
              <div key={index} className={`terminal-line ${line.isUser ? 'user-line' : 'system-line'}`}>
                {line.isUser && <span className="prompt-symbol">➜  ~ </span>}
                {line.text}
              </div>
            ))}
            {step < 3 && (
              <div className="terminal-input-line">
                <span className="prompt-symbol">➜  ~ </span>
                <span className="prompt-label">{getPrompt()}</span>
                <input
                  ref={inputRef}
                  type={step === 1 ? "email" : "text"}
                  value={input}
                  onChange={handleInput}
                  onKeyDown={handleKeyDown}
                  className="terminal-input"
                  autoComplete="off"
                />
              </div>
            )}
            {step === 3 && <div className="terminal-line system-line">Sending...</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
