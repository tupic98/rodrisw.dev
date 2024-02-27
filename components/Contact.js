"use client"

import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      e.target,
      process.env.EMAILJS_PUBLIC_KEY
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
    });

    e.target.reset();
  }

  return (
    <section
      id="contact"
      className="contact-area pt-95 pb-130 rpt-70 rpb-100 rel z-1"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-content-part pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-40">
                <span className="sub-title mb-15">Get In Touch</span>
                <h2>
                   Let's <span>Work Together</span>
                </h2>
                <p>
                  <span className="fs-4">
                    <i className="far fa-envelope pe-2" />
                    <a href="mailto:raalvarenga@rodrisw.dev" >raalvarenga@rodrisw.dev</a>
                  </span>
                  <br></br>
                  <br></br>
                  <span className="fs-4">
                    <i className="fab fa-linkedin pe-2" />
                    <a href="https://www.linkedin.com/in/rodrigo-alvarenga-928b7a190/" rel="noopener noreferrer" target="_blank">Linked In</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="contact-form contact-form-wrap form-style-one wow fadeInUp delay-0-4s">
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
export default Contact;

export const Contact2 = () => {
  return (
    <section id="contact" className="contact-area py-115 rpy-100 rel z-1">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-7 col-lg-8">
            <div className="contact-two-content pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-25">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" /> let’s work together
                </span>
                <h2>let’s Work Together</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-sm-8">
                  <h3>i,m avaiable at</h3>
                  <h5>
                    <i className="far fa-envelope" /> bill.sanders@example.com
                  </h5>
                  <h5>
                    <i className="far fa-phone" /> 239) 555-0108
                  </h5>
                </div>
                <div className="col-sm-4">
                  <div className="arrow">
                    <i className="fal fa-arrow-right" />
                  </div>
                </div>
              </div>
              <div className="social-flow">
                <h4>Follow :</h4>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-form-two form-style-one wow fadeInUp delay-0-4s">
              <form
                id="contactForm"
                className="contactForm"
                name="contactForm"
                action="assets/php/form-process.php"
                method="post"
              >
                <div className="form-group">
                  <label className="for-title" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    required=""
                    data-error="Please enter your Email"
                  />
                  <label htmlFor="email" className="for-icon">
                    <i className="far fa-envelope" />
                  </label>
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <label className="for-title" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    required=""
                    data-error="Please enter your Name"
                  />
                  <label htmlFor="name" className="for-icon">
                    <i className="far fa-user" />
                  </label>
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={7}
                    placeholder="Write Messege....."
                    required=""
                    data-error="Please enter your Message"
                    defaultValue={""}
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn">
                    <i className="far fa-envelope" /> Messege me
                  </button>
                  <div id="msgSubmit" className="hidden" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
