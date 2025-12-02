import React from "react";
import "./gitabout.css";

const Gitabout = () => {
  return (
    <section id="abouts">
      <div className="container abouts__container">
        <div className="abouts__mes">
          <div className="right">
            <div className="mac-window">
              <div className="mac-header">
                <div className="mac-buttons">
                  <span className="mac-btn close"></span>
                  <span className="mac-btn minimize"></span>
                  <span className="mac-btn expand"></span>
                </div>
                <div className="mac-title">leetcode_stats — zsh</div>
              </div>
              <div className="mac-content">
                <img
                  src={`https://leetcard.jacoblin.cool/nivin77789?ext=activity`}
                  alt="LeetCode Stats"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="abouts__conten">
          <div className="right">
            <div className="mac-window">
              <div className="mac-header">
                <div className="mac-buttons">
                  <span className="mac-btn close"></span>
                  <span className="mac-btn minimize"></span>
                  <span className="mac-btn expand"></span>
                </div>
                <div className="mac-title">github_stats — zsh</div>
              </div>
              <div className="mac-content img-d">
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com?user=nivin77789&theme=vision-friendly-dark&hide_border=true&date_format=M%20j%5B%2C%20Y%5D`}
                  alt="GitHub Streak Stats"
                />
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=nivin77789&show_icons=true&theme=vision-friendly-dark&hide_border=true`}
                  alt="GitHub Stats"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gitabout;