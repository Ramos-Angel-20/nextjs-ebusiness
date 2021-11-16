import { HiMenuAlt3 } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';

import { useState, useContext } from 'react';

import { SectionsContext } from '../context/SectionsProvider';
import styles from '../styles/Navigation.module.css';

const Navigation = ({ classes }) => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { aboutRef, servicesRef, contactRef, scrollHandler } = useContext(SectionsContext);

    const mobileMenuOpenHandler = () => {
        setMobileMenuOpen(prevState => !prevState);
    }
    console.log(mobileMenuOpen);

    return (
        <div className={`${styles.navigation} ${classes && styles.scrolled}`}>
            <div className={styles['navigation__content']}>
                <h1 className={styles['navigation__title']}>CODE<span>BOSS</span></h1>
                <ul className={styles['navigation__menu--desktop']}>
                    <li onClick={() => scrollHandler(aboutRef)}>Nosotros</li>
                    <li onClick={() => scrollHandler(servicesRef)}>Servicios</li>
                    <li onClick={() => scrollHandler(contactRef)} className={styles['navigation__menu__contact-btn']} >Contactanos</li>
                </ul>

                <div className={styles['navigation__menu--mobile-btn']}>
                    <HiMenuAlt3 onClick={mobileMenuOpenHandler} />
                </div>
            </div>
            {mobileMenuOpen && (
                <>
                    <div className={styles['navigation__menu--mobile']}>
                        <div className={styles['navigation__menu--mobile__actions']}>
                            <FaTimes onClick={mobileMenuOpenHandler} />
                        </div>
                        <ul>
                            <li onClick={() => scrollHandler(aboutRef)}>Nosotros</li>
                            <li onClick={() => scrollHandler(servicesRef)}>Servicios</li>
                            <li onClick={() => scrollHandler(contactRef)}>Contactanos</li>
                        </ul>
                    </div>

                    <div className={styles.backdrop} onClick={mobileMenuOpenHandler}>

                    </div>
                </>
            )}
        </div>
    );
}

export default Navigation;