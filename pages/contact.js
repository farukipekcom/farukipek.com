/* eslint-disable react/no-unescaped-entities */
import Title from "../components/title/title";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <Title
          pagetitle={"Contact"}
          title={"Let's make great products together!"}
          details={
            "Reach out filling the form below or send me an email at faruk@farukipek.com"
          }
        />
        <form className="contact-form">
          <div className="contact-form-item">
            <span className="contact-form-item-label">Name</span>
            <input
              type="text"
              placeholder="Your name"
              className="contact-form-item-input"
            />
          </div>
          <div className="contact-form-item">
            <span className="contact-form-item-label">Email</span>
            <input
              type="text"
              placeholder="you@company.com"
              className="contact-form-item-input"
            />
          </div>
          <div className="contact-form-item">
            <span className="contact-form-item-label">Message</span>
            <textarea
              name=""
              id=""
              placeholder="Tell me about your site project requirements and when you'd like to start."
              className="contact-form-item-input contact-form-item-textarea"
            ></textarea>
          </div>
          <div className="contact-form-item">
            <button className="contact-form-item-button">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
