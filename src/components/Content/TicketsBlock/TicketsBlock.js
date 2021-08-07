import React from 'react'
import styles from './styles/ticketsMenu.module.css'
import TicketList from "./supComponents/TicketList/TicketList";

export default function TicketsBlock() {
    return(
        <div className={styles.wrapper_position}>
            <div className={styles.tickets_block}>

                <div className={styles.wrapper_title}>
                    <div className={styles.title_block}>
                        <h4 className={styles.title}>Featured Projects</h4>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore laudantium sunt cumque
                            cupiditate quibusdam qui?
                        </p>
                    </div>
                    <div className={styles.btn}>Become a member</div>
                </div>
                <TicketList />
            </div>
        </div>
    )
}