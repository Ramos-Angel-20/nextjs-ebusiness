import React, { useState, useEffect, useRef } from 'react';

import styles from '../styles/Layout.module.css';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {

    
    const [navbarClasses, setNavbarClasses] = useState('');
    const mainRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const { y } = mainRef.current.getBoundingClientRect();
            
            if (y <= -30) {
                setNavbarClasses('scrolled');
            }
            else {
                setNavbarClasses('');
            }

        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className={styles.layout}>
            <Navigation classes={navbarClasses}/>
            <main ref={mainRef}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;