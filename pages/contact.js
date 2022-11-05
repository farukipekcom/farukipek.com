/* eslint-disable react/no-unescaped-entities */
import Title from "../components/title/title";
const Contact = () => {
  return (
    <div class="contact">
      <div class="container">
        <Title
          pagetitle={"Contact"}
          title={"Let's make great products together!"}
          details={
            "Reach out filling the form below or send me an email at faruk@farukipek.com"
          }
        />
        <form class="contact-form">
          <div class="contact-form-item">
            <span class="contact-form-item-label">Name</span>
            <input
              type="text"
              placeholder="Your name"
              class="contact-form-item-input"
            />
          </div>
          <div class="contact-form-item">
            <span class="contact-form-item-label">Email</span>
            <input
              type="text"
              placeholder="you@company.com"
              class="contact-form-item-input"
            />
          </div>
          <div class="contact-form-item">
            <span class="contact-form-item-label">Message</span>
            <textarea
              name=""
              id=""
              placeholder="Tell me about your site project requirements and when you'd like to start."
              class="contact-form-item-input contact-form-item-textarea"
            ></textarea>
          </div>
          <div class="contact-form-item">
            <button class="contact-form-item-button">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
