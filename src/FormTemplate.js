import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormTemplate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formMessage = document.querySelector(".form-message");

    emailjs.sendForm('service_f4o6b7e', 'template_jxkon1a', form.current, process.env.REACT_APP_ID)
      .then((result) => {
        //   console.log(result.text);
          form.current.reset();
          formMessage.innerHTML = "<p class='success'> Message envoyé ! </p>";
          setTimeout(() => {formMessage.innerHTML=""}, 5000)
      }, (error) => {
        //   console.log(error.text);
          formMessage.innerHTML = "<p class='error'> Une erreur s'est produite, veuillez réessayer. </p>";
          setTimeout(() => {formMessage.innerHTML=""}, 5000)
      });
  };

  return (
    <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" required/>
            <label>Email</label>
            <input type="email" name="email" required/>
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" required/>
        </form>
        <div className="form-message">

        </div>
    </div>
  );
};

export default FormTemplate;