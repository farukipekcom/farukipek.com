import styles from "./contact.module.scss";
import Title from "../components/title/title";
const Contact = () => {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <Title
          pagetitle={"Contact"}
          title={"Let's make great products together!"}
          details={
            "Reach out filling the form below or send me an email at faruk@farukipek.com"
          }
        />
        <form className={styles.form} method="post" onSubmit={handleOnSubmit}>
          <div className={styles.item}>
            <span className={styles.label}>Name</span>
            <input
              type="text"
              placeholder="Your name"
              className={styles.input}
              name="name"
            />
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Email</span>
            <input
              type="text"
              placeholder="you@company.com"
              className={styles.input}
              name="email"
            />
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Message</span>
            <textarea
              name="message"
              id=""
              placeholder="Tell me about your site project requirements and when you'd like to start."
              className={`${styles.input} ${styles.textarea}`}
            ></textarea>
          </div>
          <div className={styles.item}>
            <button className={styles.button}>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
