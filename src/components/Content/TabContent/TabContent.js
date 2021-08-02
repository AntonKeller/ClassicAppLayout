import React from 'react'
import styles from './styles/tabContent.module.css'

export default function TabContent() {
    return(
        <div className={styles.tab_content}>
            <div className={styles.img}></div>
            <div className={styles.tab_txt}>
                <div className={styles.tab_title}>
                    Browse projects, like booking a hotel online !
                </div>
                <div className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reiciendis officia quas odio eum illum
                    voluptatibus, ut asperiores recusandae numquam totam itaque nam voluptas, velit quasi reprehenderit
                    quisquam repellat dolorem?
                </div>
            </div>
        </div>
    )
}