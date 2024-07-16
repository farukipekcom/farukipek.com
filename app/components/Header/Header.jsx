import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={`pageContainer + ${styles.header}`}>
      <Logo />
      <Navbar />
    </header>
  );
}
