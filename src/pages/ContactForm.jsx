import { useState } from "react";

import validateEmail from "../utils/helpers.js";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
console.log(e.target.value)
if (e.target.value.length < 1){
  setErrorMessage('This field is required')
}

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
      <h2 className="text-3xl header-text text-center my-4">Contact Me</h2>
      <form
        className="flex flex-col justify-center items-center "
        onSubmit={handleFormSubmit}
      >
        <input
          className="w-1/3 px-3 py-2 m-2 rounded-md shadow-lg"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onBlur ={handleInputChange}
          onChange={handleInputChange}
        />
        <input
          className="w-1/3 px-3 py-2 m-2 rounded-md shadow-lg"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onBlur ={handleInputChange}
          onChange={handleInputChange}
        />

        <textarea
          className="w-11/12 px-3 py-2 m-2 rounded-md shadow-lg"
          type="text"
          name="message"
          onBlur={handleInputChange}
          onChange={handleInputChange}
          placeholder="Message"
        />
        <button
          className="footer-link text-xl m-1 px-2 rounded-lg shadow-xl  "
          type="submit"
        >
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
      <p className="text-center text-xl">
        This form does not currently function. If you would like to contact me
        please email me. Have a great day
      </p>
    </section>
  );
}
