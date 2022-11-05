import Link from "next/link";
import Menu from '../icons/menu';
import Close from '../icons/close';
import Copy from '../icons/copy';
import ArrowDown from '../icons/arrow-down';
const Header = () => {
  return (
    <header class="header" id="header">
      <div class="header-background"></div>
      <div class="container">
        <Link href="/" class="header-logo">
          Faruk Ipek
        </Link>
        <button class="header-switch" id="toggle2">
         <Menu size={15} />
        </button>
        <button class="header-switch header-switch2" id="toggle3">
          <Close size={15}/>
        </button>
        <nav class="header-menu" id="myTopnav">
          <a href="about" class="header-menu-item">
            About
          </a>
          <a href="blog" class="header-menu-item">
            Blog
          </a>
          <a href="projects" class="header-menu-item">
            Projects
          </a>
          <a href="contact" class="header-menu-item">
            Contact
          </a>
          <span class="header-menu-item header-menu-divider"></span>
          <button id="toggle1" class="header-menu-social">
            <ArrowDown size={15} />
          </button>

          <div class="social-modal" id="social-modal">
            <a href="" class="social-modal-item">
             <Copy size={15} />
              <span>faruk@farukipek.com</span>
            </a>
            <div class="social-modal-item-divider"></div>
            <a href="" class="social-modal-item">
              Twitter
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                xmlns="http://www.w3.org/2000/svg"
                class="social-modal-item-arrow"
              >
                <path d="M14.1759 4.89909L9.85794 0.864664C9.46002 0.492866 8.79688 0.492866 8.39896 0.864664C8.00104 1.23646 8.00104 1.85606 8.39896 2.22786L10.9485 4.62368L1.51691 4.62368C0.942169 4.62368 0.485352 5.0505 0.485352 5.58751C0.485352 6.12451 0.942169 6.55134 1.51691 6.55134L10.9485 6.55134L8.39896 8.93342C8.00104 9.30521 8.00104 9.92481 8.39896 10.2966C8.60527 10.4894 8.87059 10.5858 9.13581 10.5858C9.40102 10.5858 9.66633 10.4894 9.87265 10.2966L14.1758 6.27595C14.3674 6.09692 14.4854 5.84913 14.4854 5.58748C14.4854 5.32584 14.3821 5.07804 14.1758 4.89902L14.1759 4.89909Z" />
              </svg>
            </a>
            <a href="" class="social-modal-item">
              Linkedin
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                xmlns="http://www.w3.org/2000/svg"
                class="social-modal-item-arrow"
              >
                <path d="M14.1759 4.89909L9.85794 0.864664C9.46002 0.492866 8.79688 0.492866 8.39896 0.864664C8.00104 1.23646 8.00104 1.85606 8.39896 2.22786L10.9485 4.62368L1.51691 4.62368C0.942169 4.62368 0.485352 5.0505 0.485352 5.58751C0.485352 6.12451 0.942169 6.55134 1.51691 6.55134L10.9485 6.55134L8.39896 8.93342C8.00104 9.30521 8.00104 9.92481 8.39896 10.2966C8.60527 10.4894 8.87059 10.5858 9.13581 10.5858C9.40102 10.5858 9.66633 10.4894 9.87265 10.2966L14.1758 6.27595C14.3674 6.09692 14.4854 5.84913 14.4854 5.58748C14.4854 5.32584 14.3821 5.07804 14.1758 4.89902L14.1759 4.89909Z" />
              </svg>
            </a>
            <a href="" class="social-modal-item">
              Github
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                xmlns="http://www.w3.org/2000/svg"
                class="social-modal-item-arrow"
              >
                <path d="M14.1759 4.89909L9.85794 0.864664C9.46002 0.492866 8.79688 0.492866 8.39896 0.864664C8.00104 1.23646 8.00104 1.85606 8.39896 2.22786L10.9485 4.62368L1.51691 4.62368C0.942169 4.62368 0.485352 5.0505 0.485352 5.58751C0.485352 6.12451 0.942169 6.55134 1.51691 6.55134L10.9485 6.55134L8.39896 8.93342C8.00104 9.30521 8.00104 9.92481 8.39896 10.2966C8.60527 10.4894 8.87059 10.5858 9.13581 10.5858C9.40102 10.5858 9.66633 10.4894 9.87265 10.2966L14.1758 6.27595C14.3674 6.09692 14.4854 5.84913 14.4854 5.58748C14.4854 5.32584 14.3821 5.07804 14.1758 4.89902L14.1759 4.89909Z" />
              </svg>
            </a>
            <a href="" class="social-modal-item">
              Codepen
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                xmlns="http://www.w3.org/2000/svg"
                class="social-modal-item-arrow"
              >
                <path d="M14.1759 4.89909L9.85794 0.864664C9.46002 0.492866 8.79688 0.492866 8.39896 0.864664C8.00104 1.23646 8.00104 1.85606 8.39896 2.22786L10.9485 4.62368L1.51691 4.62368C0.942169 4.62368 0.485352 5.0505 0.485352 5.58751C0.485352 6.12451 0.942169 6.55134 1.51691 6.55134L10.9485 6.55134L8.39896 8.93342C8.00104 9.30521 8.00104 9.92481 8.39896 10.2966C8.60527 10.4894 8.87059 10.5858 9.13581 10.5858C9.40102 10.5858 9.66633 10.4894 9.87265 10.2966L14.1758 6.27595C14.3674 6.09692 14.4854 5.84913 14.4854 5.58748C14.4854 5.32584 14.3821 5.07804 14.1758 4.89902L14.1759 4.89909Z" />
              </svg>
            </a>
            <a href="" class="social-modal-item">
              Instagram
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                xmlns="http://www.w3.org/2000/svg"
                class="social-modal-item-arrow"
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
