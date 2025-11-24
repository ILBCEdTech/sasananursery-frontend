import React from "react";

export const Donate = () => (
  <section className="contact-page-sec" id="contact">
    <div className="container">
      <div className="contact-row">
        <div className="contact-page-form">
          <h2>Get In Touch</h2>
          <form action="#" method="post" className="contact-form">
            <div className="single-input-field">
              <input type="text" placeholder="Your Name" name="name" />
            </div>
            <div className="single-input-field">
              <input type="email" placeholder="E-mail" name="email" required />
            </div>
            <div className="single-input-field">
              <input type="text" placeholder="Phone Number" name="phone" />
            </div>
            <div className="single-input-field">
              <input type="text" placeholder="Subject" name="subject" />
            </div>
            <div className="message-input">
              <div className="single-input-field">
                <textarea placeholder="Write Your Message" name="message" />
              </div>
            </div>
            <div className="single-input-fieldsbtn">
              <input type="submit" value="Send Now" />
            </div>
          </form>
        </div>
        <div className="contact-page-map">
          <iframe
            title="Monastery location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15259.132572683468!2d96.1954226!3d17.0343039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c19b5a4b621345%3A0x5755adae7021ec6a!2sSarsana%20Nursery%20Monastery!5e0!3m2!1sen!2smm!4v1568866626397!5m2!1sen!2smm"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);
