import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Emailjs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tljt06n",
        "template_mljedko",
        form.current,
        "QgyIK7EXU86YAIb9F"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      // this is use for sending email for free without backend support
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <input type="text" placeholder="Full name" name="user_name" />
          <input type="email" placeholder="Email " name="user_email" />
          <input type="text" placeholder="subject" name="subject" />
          <textarea name="message" cols="30" rows="10"></textarea>
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
};

export default Emailjs;
