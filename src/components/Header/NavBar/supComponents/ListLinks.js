import React from 'react';
import styles from './styles/listLinks.module.css'

const ListLinks = ({dataLinks, visible}) => {
    if (visible) {
        return (
            <div className={styles.links}>
                {
                    dataLinks.map(item => {
                        return(
                            <a key={[item.link_name, styles.item].join('')}
                               href={item.link_href}
                               className={styles.item}>
                                {item.link_name}
                            </a>
                        )
                    })
                }
            </div>
        )
    } else{
        return <div/>
    }

};

export default ListLinks;