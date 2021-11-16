import { FcCollaboration } from 'react-icons/fc';
import { MdLocationOn, MdMail, MdPhone } from 'react-icons/md';

import { useContext } from 'react';

import { SectionsContext } from '../context/SectionsProvider';
import styles from '../styles/Contact.module.css'


const Contact = () => {

    const { contactRef } = useContext(SectionsContext);

    return (
        <div className={styles.contact} ref={contactRef}>
            <h2>Contacto</h2>
            <div className={styles['contact__grid']}>

                <form className={styles['contact__form']}>
                    <div>
                        <p>Tu nombre:</p>
                        <input type='text' name='name' />
                    </div>


                    <div>
                        <p>Tu email de trabajo:</p>
                        <input type='text' name='email' />
                    </div>

                    <div>
                        <p>¿Como te podemos ayudar?</p>
                        <textarea name='message'></textarea>
                    </div>

                    <button type='submit'>Agenda una llamada</button>
                </form>

                <div className={styles['contact__text']}>
                    <p>Cuentanos como podemos ayudarte <span><FcCollaboration /></span>...</p>

                    <div className={styles['contact__info']}>

                        <div className={styles['contact__info__item']}>
                            <MdLocationOn />
                            <p>Tijuana B.C Av.20 de Nov #34</p>
                        </div>

                        <div className={styles['contact__info__item']}>
                            <MdMail />
                            <p>codeBoss@code.com</p>
                        </div>

                        <div className={styles['contact__info__item']}>
                            <MdPhone />
                            <p>+52-664-xxx-xxxx</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;