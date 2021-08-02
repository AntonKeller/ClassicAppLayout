import React from 'react'
import styles from './styles/tabsMenu.module.css'

export default function TabsMenu() {
    return(
        <div className={styles.tabsMenu}>
            <div className={styles.tab}>
                <div className={styles.tab_namber}>1</div>
                <div className={styles.tab_name}>Simple</div>
            </div>
            <div className={styles.tab}>
                <div className={styles.tab_namber}>2</div>
                <div className={styles.tab_name}>Transparent</div>

            </div>
            <div className={styles.tab}>
                <div className={styles.tab_namber}>3</div>
                <div className={styles.tab_name}>Collaborative</div>
            </div>
        </div>
    )
}