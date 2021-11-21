import React from "react";
import SocialLinks from "./components/SocialLinks";
import emailjs from "emailjs-com";
import "./css/contact.css";
import Swal from 'sweetalert2';

export default function Contact() {
  const maile = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_523lpz9",
        "template_ovniwmr",
        e.target,
        "user_oRfXTWxb8CH2Eje8bkNI8"
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
      
      Swal.fire({
        title: 'Success',
        text: 'Query submitted successfully. We will be replying soon',
        icon: 'success'
    });
    e.target['name'].value="";
    e.target['email'].value="";
    e.target['message'].value="";
  };
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="heading-wrapper">
            <div className="heading">
              <p className="title">
                Want to <br />
                contact me?
              </p>
              <p className="separator" />
              <p className="subtitle">
                Please, use the form below or send an email to {""}
                <span className="mail">
                  rupinvijan
                  <i className="fas fa-at at" />
                  gmail
                  <i className="fas fa-circle dot" />
                  com
                </span>
                :
              </p>
            </div>
            <SocialLinks />
          </div>
          <form id="contact-form" action="#" onSubmit={maile}>
            <input placeholder="Name" name="name" type="text" required />
            <input placeholder="Email" name="email" type="email" required />
            <textarea placeholder="Message" type="text" name="message" />
            <input
              className="button"
              id="submit"
              value="Submit"
              type="submit"
            />
          </form>
        </div>
      </section>
    </>
  );
}
