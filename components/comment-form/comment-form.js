import Axios from "axios";
import { useState } from "react";
import styles from "./comment-form.module.scss";
import { useRouter } from "next/router";
const CommentForm = ({ postId }) => {
  const router = useRouter();
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
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post(process.env.NEXT_PUBLIC_COMMENTS_API, form);
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
    clear();
    router.push(router.pathname, router.asPath, { scroll: false });
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
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
