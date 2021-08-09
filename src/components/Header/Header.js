import React from 'react'
import styles from './styles/Header.module.css'
import NavBar from "./NavBar/NavBar";

export default function Header() {
    return(
        <header className={styles.header}>
            <NavBar />
        </header>
    )
}