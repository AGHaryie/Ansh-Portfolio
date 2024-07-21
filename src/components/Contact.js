import React, { useState } from "react";
import "../App.css";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import "./Contact.css"; // Import additional CSS file for styling

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name: name,
        email: email,
        message: message,
        timestamp: new Date(),
      });
      setLoader(false);
      alert("Will reach out soon");
    } catch (error) {
      alert(error.message);
      setLoader(false);
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Contact Us</h1>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button
          type="submit"
          className={`submit-btn ${loader ? "loading" : ""}`}
          disabled={loader}
        >
          {loader ? "...." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
