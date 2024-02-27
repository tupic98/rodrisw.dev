"use client"

import emailjs from '@emailjs/browser';
import { useState } from "react";
 
const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      e.target,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ).then((result) => {
      setStateMessage('Thanks for contacting me! I\'ll get back to you shortly.');
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 7500); // hide message after 5 seconds
    }, (error) => {
      setStateMessage('Something went wrong, please try again later');
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 6000); // hide message after 5 seconds
    }).catch((error) => {
      setStateMessage('Something went wrong, please try again later');
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 6000); // hide message after 5 seconds
    }).finally(() => {
      e.target.reset();
    });

  }
    return (
      <section className="contact-page pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="contact-page-content rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>
                    Let's <span>Work Together</span>
                  </h2>
                  <p>
                  </p>
                </div>
                <h6>Contact Information</h6>
                <div className="widget_contact_info mb-35">
                  <ul>
                    <li>
                      <i className="far fa-map-marker-alt" /> Riverside,
                       California
                      <br />
                    </li>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href="mailto:raalvarenga@rodrisw.dev">raalvarenga@rodrisw.dev</a>
                    </li>
                  </ul>
                </div>
                {/* <h5>Follow Me</h5>
                <div className="social-style-one mt-10">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-page-form contact-form form-style-one wow fadeInUp delay-0-2s">
                <form
                  id="contactForm"
                  className="contactForm"
                  name="contactForm"
                  method="post"
                  onSubmit={sendEmail}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="from_name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="from_name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Your Name"
                          required
                          data-error="Please enter your Name"
                        />
                        <label htmlFor="from_name" className="for-icon">
                          <i className="far fa-user" />
                        </label>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="from_email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="from_email"
                          className="form-control"
                          defaultValue=""
                          placeholder="youremail@gmail.com"
                          required
                          data-error="Please enter your Email"
                        />
                        <label htmlFor="from_email" className="for-icon">
                          <i className="far fa-envelope" />
                        </label>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="from_number">Phone Number</label>
                        <input
                          type="text"
                          id="phone_number"
                          name="from_number"
                          className="form-control"
                          defaultValue=""
                          placeholder="+880 (123) 456 88"
                        />
                        <label htmlFor="from_number" className="for-icon">
                          <i className="far fa-phone" />
                        </label>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          defaultValue=""
                          placeholder="Subject"
                        />
                        <label htmlFor="subject" className="for-icon">
                          <i className="far fa-text" />
                        </label>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="Write a message, any inquiry or question."
                          required
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <span className="contact-message">{stateMessage}</span>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn" disabled={isSubmitting}>
                          Send Me A Message <i className="far fa-angle-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> 
      </section>
    );
};
export default ContactPage;
