"use client";

import styles from "../styles/footer.module.css"
import { Logo } from "./Logo";

const Footer: React.FC = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.textContainer}>
        <p>© 2024 Rebecca Yeoh Music</p>
      </div>
      <div className={styles.svgContainer}>
        <Logo />
      </div>
    </footer>
  );

};
export default Footer;