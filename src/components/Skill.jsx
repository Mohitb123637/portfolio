import React from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skill = () => {
  const percentage = 80;
  const cssPercentage = 55;
  const javascriptPercentage = 75;
  const reactPercentage = 50;

  return (
    <div id="skills">
      <h2>My Skills</h2>
      <section>
        <div className="skills1">
          <h3>HTML</h3>
          <p>I Know high intermediate level HTML</p>
        </div>
        <div style={{ width: 150, height: 150 }}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: "#ff0000",
              pathColor: "	#ff0000",
            })}
          />
        </div>
      </section>
      <section>
        <div className="skills1">
          <h3>CSS</h3>
          <p>
            Skilled in CSS with a basic understanding of Bootstrap and Tailwind
            CSS, I proficiently style and structure web content. My skills
            include basic layout design, styling elements, and applying
            responsive principles to create visually appealing and user-friendly
            interfaces.
          </p>
        </div>
        <div style={{ width: 150, height: 150 }}>
          <CircularProgressbar
            value={cssPercentage}
            text={`${cssPercentage}%`}
            styles={buildStyles({
              textColor: "FFA500",
              pathColor: "#FFA500",
            })}
          />
        </div>
      </section>
      <section>
        <div className="skills1">
          <h3>JavaScript</h3>
          <p>
            Familiar with basic-level JavaScript, I adeptly incorporate
            interactivity into web pages. My skills include fundamental DOM
            manipulation and event handling. Eager to further develop my
            JavaScript proficiency, I contribute to creating dynamic and
            user-friendly elements within web projects.
          </p>
        </div>
        <div style={{ width: 150, height: 150 }}>
          <CircularProgressbar
            value={javascriptPercentage}
            text={`${javascriptPercentage}%`}
            styles={buildStyles({
              textColor: "green",
              pathColor: "green",
            })}
          />
        </div>
      </section>
      <section>
        <div className="skills1">
          <h3>REACT</h3>
          <p>
            As a React beginner, I am enthusiastic about building dynamic and
            modular user interfaces. Proficient in JSX syntax and state
            management basics, I am eager to expand my skills in component-based
            development and explore the vast potential of React for creating
            interactive web applications.
          </p>
        </div>
        <div style={{ width: 150, height: 150 }}>
          <CircularProgressbar
            value={reactPercentage}
            text={`${reactPercentage}%`}
          />
        </div>
      </section>
    </div>
  );
};
export default Skill;
