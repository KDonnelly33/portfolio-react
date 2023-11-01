import { useState } from "react";

import validateEmail from "../utils/helpers.js";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "name") {
      setName(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or name is invalid");
      return;
    }

    setName(""); // Clear the name input
    setEmail(""); // Clear the email input
    document.querySelector("input[name='message']").value = ""; // Clear the message input
    

    alert(`Hello ${name}`);
  };

  return (
    <section>
      <h4 className="text-3xl header-text underline text-center mb-4 ">Contact Me</h4>
      <form className="flex flex-col justify-center items-center "onSubmit={handleFormSubmit}>
        <input
        className="w-1/3 px-3 py-2 m-2 rounded-md shadow-lg"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        />
        <input
        className="w-1/3 px-3 py-2 m-2 rounded-md shadow-lg"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        
        <input className="w-11/12 px-3 py-2 m-2 rounded-md shadow-lg" type="text" name="message" placeholder="Message" />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
    </section>
  );
}
