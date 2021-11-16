import { HiMenuAlt3 } from 'react-icons/hi';

import { useContext } from 'react';

import { SectionsContext } from '../context/SectionsProvider';
import styles from '../styles/Navigation.module.css';

const Navigation = ({ classes }) => {

    const { aboutRef, servicesRef, contactRef, scrollHandler } = useContext(SectionsContext);


    return (
        <div className={`${styles.navigation} ${classes && styles.scrolled}`}>
            <div className={styles['navigation__content']}>
                <h1 className={styles['navigation__title']}>CODE<span>BOSS</span></h1>
                <ul className={styles['navigation__menu--desktop']}>
                    <li onClick={() => scrollHandler(aboutRef)}>Nosotros</li>
                    <li onClick={() => scrollHandler(servicesRef)}>Servicios</li>
                    <li onClick={() => scrollHandler(contactRef)} className={styles['navigation__menu__contact-btn']} >Contactanos</li>
                </ul>

                <div className={styles['navigation__menu--mobile']}>
                    <HiMenuAlt3 />
                </div>
            </div>
        </div>
    );
}

export default Navigation;