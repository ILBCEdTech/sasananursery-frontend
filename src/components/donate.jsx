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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912911311!2d76.69348873658222!3d30.73506264436677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1553497921355"
            sound="0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);
