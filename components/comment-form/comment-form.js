import styles from "./comment-form.module.scss";
const CommentForm = () => {
  return (
    <form className={styles.form}>
      <h2>Add a Comment</h2>
      <div className={styles.row}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className={styles.input}
        />
      </div>
      <textarea
        name="message"
        placeholder="Your message"
        className={styles.textarea}
      ></textarea>
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
