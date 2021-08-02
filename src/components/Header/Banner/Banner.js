import React from 'react'
import styles from './styles/Banner.module.css'

export default function Banner() {
    return(
        <div className={styles.banner_container}>
            <div className={styles.banner}>
                <h1 className={styles.banner__title}>Intellectual Property has the Shelf Life</h1>
                <h4 className={styles.banner__subTitle}>of a Banana.</h4>
                <div className={styles.banner__btn}>Become a Member</div>
                <div className={styles.container_btn}>
                    <div className={styles.left_nav_btn}></div>
                    <div className={styles.right_nav_btn}></div>
                </div>
            </div>
        </div>
    )
}