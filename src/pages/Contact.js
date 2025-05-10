import React from "react";
import "./Contact.css";
// import contactImg from "../assetes1/contactImg.jpg";

const Contact = () => {
  return (
    <div className="contact-page">
      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-subtext">
  We'd love to discuss your upcoming project or answer any questions you have. 
  Reach out to us through the contact form or the details below.</p>

      {/* Top section: Image + Address
      <div className="contact-top">
        <div className="contact-image">
          <img src={contactImg} alt="Office" />
        </div>
        <div className="contact-address">
          <h3>Our Office</h3>
          <p>Sarwar Nagar, Jhirra, Hyderabad, Telangana - 500006</p>
          <p><strong>Phone:</strong> +91 82830481</p>
          <p><strong>Email:</strong> Sk380559@gmail.com</p>
        </div>
      </div> */}

      {/* Bottom section: Map + Form */}
      <div className="contact-bottom">
        <div className="contact-map">
          <iframe
            title="office-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.190532897604!2d78.4403607742346!3d17.449209501122202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb975ae6c8cf27%3A0xb8b39838e8a8b9d3!2sSarwar%20Nagar%2C%20Hyderabad%2C%20Telangana%20500064!5e0!3m2!1sen!2sin!4v1684467890001!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div className="contact-top">
        <div className="contact-address">
          <h1>Our Office</h1>
          <p>Sarwar Nagar, Jhirra, Hyderabad, Telangana - 500006</p>
          <p><strong>Phone:</strong> +91 82830481</p>
          <p><strong>Email:</strong> Sk380559@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;