import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !company || !title || !message) {
      setError("This field is required");
      return;
    }

    // Handle form submission logic here
    // e.g., send form data to server or perform validation
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Company:", company);
    console.log("Title:", title);
    console.log("Message:", message);

    // Clear form fields and error message
    setName("");
    setEmail("");
    setCompany("");
    setTitle("");
    setMessage("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <div className="error">{error && !name && <p>{error}</p>}</div>
      </div>

      <div>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <div className="error">{error && !name && <p>{error}</p>}</div>
      </div>

      <div>
        <label htmlFor="company">Company Name:</label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company Name"
        />
        <div className="error">{error && !name && <p>{error}</p>}</div>
      </div>

      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <div className="error">{error && !name && <p>{error}</p>}</div>
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        ></textarea>
        <div className="error">{error && !name && <p>{error}</p>}</div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
