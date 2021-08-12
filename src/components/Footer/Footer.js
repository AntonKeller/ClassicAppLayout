import React from 'react';
import styles from './styles/footer.module.css'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.img}></div>
            <div className={styles.copyright}>
                Copyright © 2001 - 2014 Cssauthor.com
            </div>
        </footer>
    );
};
