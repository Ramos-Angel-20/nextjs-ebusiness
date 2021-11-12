import React from 'react';

import styles from '../styles/Layout.module.css';
import Navigation from './Navigation';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Navigation/>
                {children}
            <div>Componente footer</div>
        </div>
    );
}

export default Layout;