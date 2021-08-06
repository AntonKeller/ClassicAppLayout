import React from 'react'
import styles from './styles/ticketList.module.css'
import Ticket from "../Ticket/Ticket";

const tickets = [
    {
        stickerName: 'From GBP 3600',
        contentTitle: 'Ontario Tower , LONDON',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d...',
        progressValue: '10',
        progressMax: '100',
        day: '1 day',
        dropBtnText: 'See Project Details',
        numImg: 0
    },
    {
        stickerName: 'From GBP 3600',
        contentTitle: 'Ontario Tower , LONDON',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d...',
        progressValue: '60',
        progressMax: '100',
        day: '6 day',
        dropBtnText: 'See Project Details',
        numImg: 1
    },
    {
        stickerName: 'From GBP 3600',
        contentTitle: 'Ontario Tower , LONDON',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d...',
        progressValue: '20',
        progressMax: '100',
        day: '3 day',
        dropBtnText: 'See Project Details',
        numImg: 2
    }
]

export default function TicketList() {
    return(
        <div className={styles.tickets}>
            {
                tickets.map(item => {
                    return (
                        <Ticket
                            key = {item}
                            stickerName={item.stickerName}
                            contentTitle={item.contentTitle}
                            description={item.description}
                            progressValue={item.progressValue}
                            progressMax={item.progressMax}
                            day={item.day}
                            dropBtnText={item.dropBtnText}
                            numImg={item.numImg}
                        />)
                })
            }
        </div>
    )
}
