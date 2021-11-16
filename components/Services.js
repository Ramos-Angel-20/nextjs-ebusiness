import { MdDesignServices, MdSecurity, MdSmartphone } from 'react-icons/md';
import { FiDatabase, FiGlobe } from 'react-icons/fi';
import { BiNetworkChart } from 'react-icons/bi';

import { useContext } from 'react';

import { SectionsContext } from '../context/SectionsProvider';
import styles from '../styles/Services.module.css';


const Services = () => {

    const { servicesRef } = useContext(SectionsContext);

    return (
        <div className={styles.services}>

            <div className={styles['services__slogan']}>
                <p><span>Transformamos</span> compañias</p>
                <p>Preparamos tu negocio para el <span>futuro</span></p>
                <p>Somos expertos en aceleración <span>digital</span></p>
            </div>

            <h2 ref={servicesRef}>Nuestros Servicios</h2>
            <div className={styles['services__grid']}>


                <div className={`${styles['services__grid__item']} ${styles.web}`}>
                    <div className={styles['services__grid__item__content']}>


                        <p>Desarrollo web</p>


                        <div className={styles['services__grid__item__content__icon']}>
                            <FiGlobe />
                        </div>


                    </div>
                </div>



                <div className={`${styles['services__grid__item']} ${styles.mobile}`}>
                    <div className={styles['services__grid__item__content']}>


                        <p>Desarrollo de aplicaciones mobiles</p>


                        <div className={styles['services__grid__item__content__icon']}>
                            <MdSmartphone />
                        </div>
                    </div>
                </div>



                <div className={`${styles['services__grid__item']} ${styles.uiux}`}>
                    <div className={styles['services__grid__item__content']}>


                        <p>Diseño UI y UX</p>


                        <div className={styles['services__grid__item__content__icon']}>
                            <MdDesignServices />
                        </div>
                    </div>
                </div>



                <div className={`${styles['services__grid__item']} ${styles.database}`}>
                    <div className={styles['services__grid__item__content']}>


                        <p>Administración y optimización de bases de datos</p>


                        <div className={styles['services__grid__item__content__icon']}>
                            <FiDatabase />
                        </div>
                    </div>
                </div>




                <div className={`${styles['services__grid__item']} ${styles.network}`}>
                    <div className={styles['services__grid__item__content']}>


                        <p>Diseño y mantenimiento de redes</p>


                        <div className={styles['services__grid__item__content__icon']}>
                            <BiNetworkChart />
                        </div>
                    </div>

                </div>




                <div className={`${styles['services__grid__item']} ${styles.security}`}>
                    <div className={styles['services__grid__item__content']}>


                        <p>Consultoría de ciberseguridad</p>


                        <div className={styles['services__grid__item__content__icon']}>
                            <MdSecurity />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Services;