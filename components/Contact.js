import { FcCollaboration } from 'react-icons/fc';
import { MdLocationOn, MdMail, MdPhone } from 'react-icons/md';
import { FaTelegramPlane } from 'react-icons/fa';

import { useContext } from 'react';

import { SectionsContext } from '../context/SectionsProvider';
import useInput from '../hooks/use-input';
import styles from '../styles/Contact.module.css'

const nameValidator = name => {
    const nameRegex = /^[a-zA-Z]+$/;

    if (name.trim().lenght !== 0 && name.match(nameRegex)) {
        return true;
    }

    return false;
}

const emailValidator = value => {
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value.match(emailReg)) {
        return true;
    }

    return false;
}

const messageRegex = message => {

    if (message.trim().lenght !== 0) {
        return true;
    }

    return false;
}


const Contact = () => {

    const { contactRef } = useContext(SectionsContext);
    
    const {
        inputValue: nameValue,
        changeHandler: nameChangeHandler, 
        blurHandler: nameBlurHandler, 
        hasError: nameHasError
    } = useInput(nameValidator);

    const {
        inputValue: emailValue,
        changeHandler: emailChangeHandler, 
        blurHandler: emailBlurHandler, 
        hasError: emailHasError
    } = useInput(emailValidator);
    
    const {
        inputValue: messageValue,
        changeHandler: messageChangeHandler, 
        blurHandler: messageBlurHandler, 
        hasError: messageHasError
    } = useInput(messageRegex);


    const contactFormSubmitHandler = e => {
        e.preventDefault();
        
        if (nameHasError && emailHasError && messageHasError) {
            return;
        }
    }

    return (
        <div className={styles.contact} ref={contactRef}>
            <h2>Contacto</h2>
            <div className={styles['contact__grid']}>

                <form className={styles['contact__form']} onSubmit={contactFormSubmitHandler}>
                    <div>
                        <p>Tu nombre:</p>
                        <input type='text' name='name' value={nameValue} onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
                        {nameHasError && <p style={{fontSize: '2rem', color: 'red'}}>Por favor no incluyas numeros o dejes este campo vacio...</p> }
                    </div>


                    <div>
                        <p>Tu email de trabajo:</p>
                        <input type='text' name='email' value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
                        {emailHasError && <p style={{fontSize: '2rem', color: 'red'}}>Por favor usa una dirección de correo valida...</p> }
                    </div>

                    <div>
                        <p>¿Como te podemos ayudar?</p>
                        <textarea name='message' value={messageValue} onChange={messageChangeHandler} onBlur={messageBlurHandler}></textarea>
                        {messageHasError && <p style={{fontSize: '2rem', color: 'red'}}>Por favor no dejes este campo vacio...</p> }
                    </div>

                    <button type='submit'>Enviar <span><FaTelegramPlane/></span></button>
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