import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer__content']}>
                <h2 className={styles['footer__title']}>CODE<span>BOSS</span></h2>

                <div className={styles['footer__icons']}>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitter/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;