import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <Link href="https://twitter.com/example">
          <a target="_blank" rel="noopener noreferrer">Twitter</a>
        </Link>
        <Link href="https://instagram.com/example">
          <a target="_blank" rel="noopener noreferrer">Instagram</a>
        </Link>
        {/* Add more social media links as needed */}
      </div>
      <div className={styles.copyRight}>
        &copy; {new Date().getFullYear()} My Fashion App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;