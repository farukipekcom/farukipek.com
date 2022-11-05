import styles from './button.module.scss';
import ArrowRight from '../icons/arrow-right';
const Button = ({text}) => {
    return (
        <a href="contact" className={styles.hireme}>
              <span>{text}</span>
              <ArrowRight size={15} />
            </a>
    );
}

export default Button;