import React, {useState} from 'react'
import styles from './styles/navBar.module.css'
import ListLinks from "./supComponents/ListLinks";

export default function NavBar() {

    let [dataLinks] = useState([
        {link_name: 'home', link_href: '/home'},
        {link_name: 'how it works', link_href: '/works'},
        {link_name: 'discover a project', link_href: '/project'},
        {link_name: 'blog', link_href: '/blog'},
        {link_name: 'find out more', link_href: '/findMore'},
        ])

    function dropBtnHandler() {
        console.log('ds')
    }

    return(
        <nav className={styles.nav_bar}>
            <div onClick={dropBtnHandler} className={styles.drop_btn}></div>
            <div className={styles.logo} />
            <ListLinks dataLinks = {dataLinks} />
            <div className={styles.login}>
                <span className={styles.logSp}>Login</span>
            </div>
        </nav>
    )
}