import { HiMenuAlt3 } from 'react-icons/hi';

import styles from '../styles/Navigation.module.css';

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles['navigation__content']}>
                <h1 className={styles['navigation__title']}>CODE<span>BOSS</span></h1>
                <ul className={styles['navigation__menu--desktop']}>
                    <li>Nosotros</li>
                    <li>Servicios</li>
                    <li>Contacto</li>
                </ul>
                
                <div className={styles['navigation__menu--mobile']}>
                    <HiMenuAlt3/>
                </div>
            </div>
        </div>
    )
}

export default Navigation;