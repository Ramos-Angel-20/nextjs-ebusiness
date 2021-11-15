import { MdDesignServices, MdSecurity, MdSmartphone } from 'react-icons/md';
import { FiMonitor, FiDatabase } from 'react-icons/fi';
import { BiNetworkChart } from 'react-icons/bi';



import styles from '../styles/Services.module.css';

const Services = () => {
    return (
        <div className={styles.services}>

            <div className={styles['services__slogan']}>
            <p><span>Transformamos</span> compañias</p>
            <p>Preparamos tu negocio para el <span>futuro</span></p>
            <p>Somos expertos en aceleración <span>digital</span></p>
            </div>

            <h2>Nuestros Servicios</h2>
            <div className={styles['services__grid']}>
                <div className={styles['services__grid__item']}>
                    <p>Desarrollo web</p>
                </div>

                <div className={styles['services__grid__item']}>
                    <p>Diseño UI y UX</p>
                </div>

                <div className={styles['services__grid__item']}>
                    <p>Desarrollo de aplicaciones mobiles</p>
                </div>

                <div className={styles['services__grid__item']}>
                    <p>Administracion y optimización de bases de datos</p>
                </div>

                <div className={styles['services__grid__item']}>
                    <p>Diseño y mantenimiento de redes</p>
                </div>

                <div className={styles['services__grid__item']}>
                    <p>Consultoria de ciberseguridad</p>
                </div>
            </div>
        </div>
    )
}

export default Services;