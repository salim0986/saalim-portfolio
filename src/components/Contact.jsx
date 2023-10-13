import React, { useState } from "react";
import vg from "../assets/vg.png";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase.js";

const Contact = () => {
  const initialState = { name: "", email: "", message: "" };
  const [form, setForm] = useState(initialState);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });
      setIsDisabled(false);
      toast.success("Message Sent");
    } catch (error) {
      setIsDisabled(false);
      toast.error("Error Ocurred!");
      console.log(error);
    }
    setForm(initialState);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const { name, email, message } = form;

  const frames = {
    contact: {
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
        opacity: 0,
        y: "-100%",
      },
      whileInView: {
        opacity: 1,
        y: 0,
      },
    },
  };
  return (
    <section id="contact">
      <section>
        <motion.div {...frames.contact}>
          <h2>Contact me</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={name}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={email}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="message"
              required
              placeholder="Your Message"
              value={message}
              onChange={(e) => handleChange(e)}
            />
            <motion.button
              {...frames.button}
              disabled={isDisabled}
              className={isDisabled ? "disableBtn" : ""}
              transition={{ delay: 0.5 }}
              type="submit"
            >
              Send
            </motion.button>
          </form>
        </motion.div>
      </section>
      <section>
        <img src={vg} alt="Welcome to contact" />
      </section>
    </section>
  );
};

export default Contact;
