import Axios from "axios";
import { useState } from "react";
import styles from "./comment-form.module.scss";
import { useRouter } from "next/router";
const CommentForm = ({ postId }) => {
  const router = useRouter();
  const [message, setMessage] = useState();
  const [form, setForm] = useState({
    author_name: "",
    author_email: "",
    content: "",
    post: postId,
    captcha: "",
  });
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const clear = () => {
    setForm({
      author_name: "",
      author_email: "",
      content: "",
      post: postId,
      captcha: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    form.captcha = grecaptcha.getResponse();
    try {
      const res = await Axios.post("/api/comments", form);
      clear();
      if (res.status === 200) {
        setMessage(1);
      }
    } catch (ex) {
      if (ex.response?.data?.success === false) {
        setMessage(2);
      }
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Add a Comment</h2>
      <div className={styles.row}>
        <input
          type="text"
          name="author_name"
          placeholder="Your name"
          className={styles.input}
          onChange={onChange}
          value={form.author_name}
          required
        />
        <input
          type="email"
          name="author_email"
          placeholder="Your email"
          onChange={onChange}
          className={styles.input}
          value={form.author_email}
          required
        />
      </div>
      <textarea
        name="content"
        placeholder="Your message"
        onChange={onChange}
        className={styles.textarea}
        value={form.content}
        required
      ></textarea>
      <div
        className="g-recaptcha"
        data-sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITEKEY}
      ></div>
      <button type="submit" className={styles.button}>
        Submit
      </button>
      {message === 1 ? (
        <div className={`${styles.message} ${styles.green}`}>
          Comment posted. Waiting for approval.
        </div>
      ) : message === 2 ? (
        <div className={`${styles.message} ${styles.red}`}>
          reCAPTCHA is required.
        </div>
      ) : (
        ""
      )}
    </form>
  );
};

export default CommentForm;
