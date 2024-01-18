import React from "react";
import me from '../assests/meeee.jpg'

import {
  AiFillGithub,
  AiOutlineArrowUp,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />
        <h2>Mohit bhandari</h2>
        <p>
          Small disciplines repeated with consistency every day lead to great
          achievements gained slowly over time.
        </p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://instagram.com/mohitb12363" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Mohitb123637" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/codewith-bhandari-446a822a0/" target={"blank"}>
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
