import React from 'react'
import styles from './styles/Header.module.css'
import NavBar from "./NavBar/NavBar";
import Banner from "./Banner/Banner";

export default function Header() {
    return(
        <header className={styles.header}>
            <NavBar />
            <Banner />
        </header>
    )
}