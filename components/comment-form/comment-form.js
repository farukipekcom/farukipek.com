import Axios from "axios";
import { useState } from "react";
import styles from "./comment-form.module.scss";
import { useRouter } from "next/router";
const CommentForm = ({ postId }) => {
  const router = useRouter();
  const [ad, setAd] = useState("Submit");
  const [status, setStatus] = useState(0);
  const [form, setForm] = useState({
    author_name: "",
    author_email: "",
    content: "",
    post: postId,
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
    });
  };
  const handleSubmit = async (e) => {
    setStatus(1);
    setAd("Sending...");
    e.preventDefault();
    try {
      const res = await Axios.post(process.env.NEXT_PUBLIC_COMMENTS_API, form);
      console.log(res);
      clear();
      router.push(router.pathname, router.asPath, {
        scroll: false,
        ad,
      });
      setAd("Submitted!");
      setStatus(2);
      setTimeout(() => {
        setAd("Submit");
        setStatus(0);
      }, 2000);
    } catch (ex) {
      console.log(ex);
      setStatus(3);
      setAd("Not Submitted!");
      setTimeout(() => {
        setAd("Submit");
        setStatus(0);
      }, 2000);
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
        />
        <input
          type="email"
          name="author_email"
          placeholder="Your email"
          onChange={onChange}
          className={styles.input}
          value={form.author_email}
        />
      </div>
      <textarea
        name="content"
        placeholder="Your message"
        onChange={onChange}
        className={styles.textarea}
        value={form.content}
      ></textarea>
      <button
        type="submit"
        className={`${styles.button} ${
          status === 0
            ? styles.button
            : status === 1
            ? styles.blue
            : status === 2
            ? styles.green
            : status === 3
            ? styles.red
            : ""
        }`}
      >
        {ad}
      </button>
    </form>
  );
};

export default CommentForm;
