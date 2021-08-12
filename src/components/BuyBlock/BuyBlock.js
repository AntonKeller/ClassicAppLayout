import React from 'react'
import styles from './styles/findMenu.module.css'

export default function BuyBlock() {

    let buyItems = [
        {
            sImg: styles.img_1,
            title:'Best furnitures',
            text:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Molestiae cum neque reiciendis.`,
            btn_text:'gift furniture'
        },
        {
            sImg: styles.img_2,
            title:'Best wallets',
            text:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Molestiae cum neque reiciendis.`,
            btn_text:'buy a wallet'
        }
    ]

    return(
        <section className={styles.buy_block}>
            {
                buyItems.map(item => {
                    return(
                        <div className={[styles.buy_item, item.style_mode].join(' ')}>
                            <div className={[styles.image_block, item.sImg].join(' ')} />
                            <div className={styles.title}>
                                {item.title}
                            </div>
                            <div className={styles.text}>
                                {item.text}
                            </div>
                            <div className={styles.button}>
                                {item.btn_text}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}