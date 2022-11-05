/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <div class="contact">
      <div class="container">
        <div class="hero">
          <div class="hero-page-title">Contact</div>
          <h1 class="hero-title">Let's make great products together!</h1>
          <p class="hero-details">
            Reach out filling the form below or send me <br /> an email at{" "}
            <span class="hero-details-link">faruk@farukipek.com</span>
          </p>
        </div>
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
