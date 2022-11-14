import styles from "./contact.module.scss";
import Title from "../components/title/title";
import { useState } from "react";
import Page from "../components/page/page";
const Contact = () => {
  const [message, setMessage] = useState();
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
      field.value = "";
    });
    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then(function (response) {
      console.log(response);
    });
    setMessage(1);
  }
  return (
    <Page
      title="Contact - Faruk Ipek"
      desc="I'm Faruk Ipek, a freelancer front-end developer from Charlotte USA. Let's make great products together! Send me a message with contact form."
    >
      <Title
        pagetitle={"Contact"}
        title={"Let's make great products together!"}
        details={
          "Reach out filling the form below or send me an email at faruk@farukipek.com"
        }
      />
      <form className={styles.form} onSubmit={handleOnSubmit}>
        <div className={styles.item}>
          <span className={styles.label}>Name</span>
          <input
            type="text"
            placeholder="Your name"
            className={styles.input}
            id="name"
            name="name"
            required
          />
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Email</span>
          <input
            type="email"
            placeholder="you@company.com"
            className={styles.input}
            id="email"
            name="email"
            required
          />
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Message</span>
          <textarea
            name="message"
            id="message"
            placeholder="Tell me about your site project requirements and when you'd like to start."
            className={`${styles.input} ${styles.textarea}`}
            required
          ></textarea>
        </div>
        <div className={styles.item}>
          <button className={styles.button}>Send Message</button>
        </div>
        {message === 1 ? (
          <div className={styles.message}>Mesaj başarıyla gönderildi</div>
        ) : (
          ""
        )}
      </form>
    </Page>
  );
};

export default Contact;
