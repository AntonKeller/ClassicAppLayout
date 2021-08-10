import React from 'react'
import styles from './styles/tabsMenu.module.css'

export default function TabsMenu() {

    let tabs = [
        {value: 1, txt: 'Simple'},
        {value: 2, txt: 'Transparent'},
        {value: 3, txt: 'Collaborative'},
    ]

    return(
        <div className={styles.tabsMenu}>
            {
                tabs.map(item => {
                    return(
                        <div className={styles.tab}>
                            <div className={styles.tab_namber}>
                                <span>{item.value}</span>
                            </div>
                            <div className={styles.tab_name}>
                                <span>{item.txt}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}