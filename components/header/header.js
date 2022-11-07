import Link from "next/link";
import Menu from "../icons/menu";
import Close from "../icons/close";
import Copy from "../icons/copy";
import ArrowDown from "../icons/arrow-down";
import styles from "./header.module.scss";
const Header = () => {
  return (
    <header className={styles.header} id="header">
      <div className={styles.background}></div>
      <div className={styles.containers}>
        <Link href="/" className={styles.logo}>
          Faruk Ipek
        </Link>
        <button className={styles.switch} id="toggle2">
          <Menu size={15} />
        </button>
        <button className={`${styles.switch} ${styles.switch2}`} id="toggle3">
          <Close size={15} />
        </button>
        <nav className={styles.menu} id="myTopnav">
          <Link href="/about" className={styles.item}>
            About
          </Link>
          <Link href="/blog" className={styles.item}>
            Blog
          </Link>
          <Link href="/projects" className={styles.item}>
            Projects
          </Link>
          <Link href="/contact" className={styles.item}>
            Contact
          </Link>
          <span className={`${styles.item} ${styles.divider}`}></span>
          <button id="toggle1" className={styles.social}>
            <ArrowDown size={15} gonder="svg" />
          </button>

          <div className={styles.socialModal} id="socialModal">
            <a href="" className={styles.item2}>
              <Copy size={15} />
              <span>faruk@farukipek.com</span>
            </a>
            <div className={styles.divider2}></div>
            <a href="" className={styles.item2}>
              Twitter
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrow}
              >
                <path d="M14.1759 4.89909L9.85794 0.864664C9.46002 0.492866 8.79688 0.492866 8.39896 0.864664C8.00104 1.23646 8.00104 1.85606 8.39896 2.22786L10.9485 4.62368L1.51691 4.62368C0.942169 4.62368 0.485352 5.0505 0.485352 5.58751C0.485352 6.12451 0.942169 6.55134 1.51691 6.55134L10.9485 6.55134L8.39896 8.93342C8.00104 9.30521 8.00104 9.92481 8.39896 10.2966C8.60527 10.4894 8.87059 10.5858 9.13581 10.5858C9.40102 10.5858 9.66633 10.4894 9.87265 10.2966L14.1758 6.27595C14.3674 6.09692 14.4854 5.84913 14.4854 5.58748C14.4854 5.32584 14.3821 5.07804 14.1758 4.89902L14.1759 4.89909Z" />
              </svg>
            </a>
            <a href="" className={styles.item2}>
              Linkedin
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrow}
              >
                <path d="M14.1759 4.89909L9.85794 0.864664C9.46002 0.492866 8.79688 0.492866 8.39896 0.864664C8.00104 1.23646 8.00104 1.85606 8.39896 2.22786L10.9485 4.62368L1.51691 4.62368C0.942169 4.62368 0.485352 5.0505 0.485352 5.58751C0.485352 6.12451 0.942169 6.55134 1.51691 6.55134L10.9485 6.55134L8.39896 8.93342C8.00104 9.30521 8.00104 9.92481 8.39896 10.2966C8.60527 10.4894 8.87059 10.5858 9.13581 10.5858C9.40102 10.5858 9.66633 10.4894 9.87265 10.2966L14.1758 6.27595C14.3674 6.09692 14.4854 5.84913 14.4854 5.58748C14.4854 5.32584 14.3821 5.07804 14.1758 4.89902L14.1759 4.89909Z" />
              </svg>
            </a>
            <a href="" className={styles.item2}>
              Github
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrow}
              >
                <path d="M14.1759 4.89909L9.85794 0.864664C9.46002 0.492866 8.79688 0.492866 8.39896 0.864664C8.00104 1.23646 8.00104 1.85606 8.39896 2.22786L10.9485 4.62368L1.51691 4.62368C0.942169 4.62368 0.485352 5.0505 0.485352 5.58751C0.485352 6.12451 0.942169 6.55134 1.51691 6.55134L10.9485 6.55134L8.39896 8.93342C8.00104 9.30521 8.00104 9.92481 8.39896 10.2966C8.60527 10.4894 8.87059 10.5858 9.13581 10.5858C9.40102 10.5858 9.66633 10.4894 9.87265 10.2966L14.1758 6.27595C14.3674 6.09692 14.4854 5.84913 14.4854 5.58748C14.4854 5.32584 14.3821 5.07804 14.1758 4.89902L14.1759 4.89909Z" />
              </svg>
            </a>
            <a href="" className={styles.item2}>
              Codepen
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrow}
              >
                <path d="M14.1759 4.89909L9.85794 0.864664C9.46002 0.492866 8.79688 0.492866 8.39896 0.864664C8.00104 1.23646 8.00104 1.85606 8.39896 2.22786L10.9485 4.62368L1.51691 4.62368C0.942169 4.62368 0.485352 5.0505 0.485352 5.58751C0.485352 6.12451 0.942169 6.55134 1.51691 6.55134L10.9485 6.55134L8.39896 8.93342C8.00104 9.30521 8.00104 9.92481 8.39896 10.2966C8.60527 10.4894 8.87059 10.5858 9.13581 10.5858C9.40102 10.5858 9.66633 10.4894 9.87265 10.2966L14.1758 6.27595C14.3674 6.09692 14.4854 5.84913 14.4854 5.58748C14.4854 5.32584 14.3821 5.07804 14.1758 4.89902L14.1759 4.89909Z" />
              </svg>
            </a>
            <a href="" className={styles.item2}>
              Instagram
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrow}
              >
                <path d="M14.1759 4.89909L9.85794 0.864664C9.46002 0.492866 8.79688 0.492866 8.39896 0.864664C8.00104 1.23646 8.00104 1.85606 8.39896 2.22786L10.9485 4.62368L1.51691 4.62368C0.942169 4.62368 0.485352 5.0505 0.485352 5.58751C0.485352 6.12451 0.942169 6.55134 1.51691 6.55134L10.9485 6.55134L8.39896 8.93342C8.00104 9.30521 8.00104 9.92481 8.39896 10.2966C8.60527 10.4894 8.87059 10.5858 9.13581 10.5858C9.40102 10.5858 9.66633 10.4894 9.87265 10.2966L14.1758 6.27595C14.3674 6.09692 14.4854 5.84913 14.4854 5.58748C14.4854 5.32584 14.3821 5.07804 14.1758 4.89902L14.1759 4.89909Z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
