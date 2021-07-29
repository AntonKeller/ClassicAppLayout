import React from 'react'
import styles from './Header.module.css'
// import {Link} from 'react-router-dom'

const links = [
    'home',
    'how it works',
    'discover a project',
    'blog',
    'find out more'
]

export default function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.logo}></div>
            <div className={styles.nav}>
                {
                    links.map(item =>{
                        return(
                            <a key={item} href="#" className={styles.nav__link}>{item}</a>
                        )
                    })
                }
                {/*<a href="#" className={styles.nav__link}>home</a>*/}
                {/*<a href="#" className={styles.nav__link}>how it works</a>*/}
                {/*<a href="#" className={styles.nav__link}>discover a project</a>*/}
                {/*<a href="#" className={styles.nav__link}>blog</a>*/}
                {/*<a href="#" className={styles.nav__link}>find out more</a>*/}
            </div>
            <div className={styles.login}>Login</div>
        </header>
    )
}