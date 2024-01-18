import React from "react";
import { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assests/my.png"

const Home = () => {

  const clientCount = useRef(null); 
  const projectCount = useRef(null); 
  const animationclientCount = ()=>{
    animate(0,100,{
      duration:1,
      onUpdate:(v)=>(clientCount.current.textContent = v.toFixed()),
    })
  }
  const animationProject = ()=>{
    animate(0,500,{
      duration:1,
      onUpdate:(v)=>(projectCount.current.textContent = v.toFixed()),
    })
  }

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am Mohit bhandari
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer....", "A Designer....", "A Frontend Developer...."],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:codewithbhandari@gmail.com">Hire Me</a>
            <a href="#work">
              Project <BsArrowUpRight />{" "}
            </a>
          </div>
          <aside>
            <article data-special>
              <p>Contact Me</p>
              <span>codewithbhandari@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>


      
      <section>
        <img src={me} alt="Mohit" />
      </section>
      <BsChevronDown/>
    </div>
  );
};

export default Home;
