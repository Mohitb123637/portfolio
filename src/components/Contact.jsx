import React, { useState } from "react";
import vg from "../assests/vg.png";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [disableBtn, setDisablebtn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisablebtn(true);
    try {
      await addDoc(collection(db, "contacts"), { name, email, msg });
      setName('')
      setEmail('')
      setMsg('')

      toast.success("Message Sent");
      setDisablebtn(false);
    } catch (error) {
      toast.error("tError");
      setDisablebtn(false);
    }
  };

  const animations = {
    form: {
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
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submitHandler} {...animations.form}>
          <h2>Contact Me</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Message"
            required
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <motion.button
          className={disableBtn ? "disableBtn" : ""}
            disabled={disableBtn}
            type="submit"
            {...animations.button}
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="" />
      </aside>
    </div>
  );
};

export default Contact;
