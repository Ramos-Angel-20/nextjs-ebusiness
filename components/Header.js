import Image from 'next/image'

import styles from '../styles/Header.module.css';
import mocks from '../assets/illustration-mockups.svg'

const Header = () => {


    return (
        <div className={styles.header}>
            <div className='container'>
                <div className={styles['header__hero']}>
                    <h2>Sitios web que no temes <span>mostrar</span></h2>
                    <div className={styles['header__hero__image']}>
                        <Image src={mocks} alt="CODEBOSS" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;