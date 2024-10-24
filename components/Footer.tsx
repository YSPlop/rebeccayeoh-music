"use client";

import styles from "../styles/footer.module.css"
import { Logo } from "./Logo";

const Footer: React.FC = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.textContainer}>
        <p>“Where words fail, music speaks.” - Hans Christian Anderson </p>
      </div>
      <div className={styles.svgContainer}>
        <Logo />
      </div>
    </footer>
  );

};
export default Footer;