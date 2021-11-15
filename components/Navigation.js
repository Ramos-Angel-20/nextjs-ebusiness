import { HiMenuAlt3 } from 'react-icons/hi';

import styles from '../styles/Navigation.module.css';

const Navigation = ({ classes }) => {


    return (
        <div className={`${styles.navigation} ${classes && styles.scrolled}`}>
            <div className={styles['navigation__content']}>
                <h1 className={styles['navigation__title']}>CODE<span>BOSS</span></h1>
                <ul className={styles['navigation__menu--desktop']}>
                    <li>Nosotros</li>
                    <li>Servicios</li>
                    <li className={styles['navigation__menu__contact-btn']} >Contactanos</li>
                </ul>

                <div className={styles['navigation__menu--mobile']}>
                    <HiMenuAlt3 />
                </div>
            </div>
        </div>
    )
}

export default Navigation;