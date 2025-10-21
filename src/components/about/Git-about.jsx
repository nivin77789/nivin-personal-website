import React from "react";
import "./gitabout.css";

const Gitabout = () => {
  return (
    <section id="abouts">
      <div className="container abouts__container">
        <div className="abouts__mes">
          <div className="right">
            <div className="sub-right">
              <img
                src={`https://leetcard.jacoblin.cool/nivin77789?ext=activity`}
                alt="LeetCode Stats"
              />
            </div>
          </div>
        </div>
        <div className="abouts__conten">
          <div className="right">
            <div className="sub-righ">
              <div className="img-d">
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