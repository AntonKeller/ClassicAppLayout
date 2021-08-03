import React from 'react'
import styles from './styles/findMenu.module.css'

export default function FindMenu() {
    return(
        <div className={styles.menu_wrapper}>
            <div className={styles.left_panel}>
                <div className={styles.block_wrapper}>
                    <div className={styles.img_left}></div>
                    <div>
                        <h3 className={styles.title}>
                            Find Properties
                        </h3>
                        <p className={styles.description}>
                            Sign up to browse the portfolio. Your journey to becoming a real
                            estate baron starts here.
                        </p>
                        <div className={styles.btn_find_left}>
                            Become A member
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right_panel}>
                <div className={styles.block_wrapper}>
                    <div className={styles.img_right}></div>
                    <div>
                        <h3 className={styles.title}>
                            Find Buyers
                        </h3>
                        <p className={styles.description}>
                            Sign up to browse the portfolio. Your journey to becoming
                            a real estate baron starts here.
                        </p>
                        <div className={styles.btn_find_right}>
                            Submit Your Project
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}