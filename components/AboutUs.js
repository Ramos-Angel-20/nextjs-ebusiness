import Image from 'next/image';
import { useContext } from 'react';

import { SectionsContext } from '../context/SectionsProvider';
import devs from '../assets/devsworking.jpg';
import styles from '../styles/AboutUs.module.css';

const AboutUs = () => {
    
    const { aboutRef } = useContext(SectionsContext);
    
    
    return (
        <div className={styles.aboutUs} ref={aboutRef}>
            <h2>Acerca de nosotros</h2>
            <div className={styles['aboutUs__grid']}>
                <div className={styles['aboutUs__grid__text']}>
                    <p>
                        Diseñamos soluciones de software escalables y de alto rendimiento
                        para satisfacer los desafíos comerciales de nuestros clientes.
                    </p>
                    <p>
                        Utilizando nuestra experiencia tecnológica y nuestra experiencia entre
                        industrias, evolucionamos la transformación digital hacia la aceleración digital.
                        Nuestro objetivo final es crear valor duradero a lo largo de todo el viaje de
                        transformación digital.
                    </p>
                    <p>
                        Cada año se postulan más de 1,2 millones de desarrolladores e ingenieros de software.
                        Solo el 1% de ellos logra formar parte del equipo de CODEBOSS. ¿El resultado? Los profesionales
                        de tecnología más talentosos y experimentados disponibles, a pedido, para brindar
                        soluciones tecnológicas para nuevas empresas.
                    </p>
                </div>

                <div className={styles['aboutUs__image__field']}>

                </div>
            </div>
        </div>
    );
}

export default AboutUs;