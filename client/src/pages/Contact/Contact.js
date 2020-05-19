import React from "react";
import Contactform from "../../components/ContactForm/ContactForm";
import { NavigationBar } from "../../components/HomeNav";

function Contact() {
  return (
    <div>
      <NavigationBar />
      <Contactform></Contactform>
    </div>
  );
}

export default Contact;
