import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export const Modal = ({ changeModalPage, showModal, modalMessage, showModalAgain, hideModal }) => {

    useEffect(() => {
        if(hideModal) document.getElementById('mainContainer').style.opacity = '0'
        if(!hideModal) document.getElementById('mainContainer').style.opacity = '1'

        if(showModal) {
            document.getElementById('mainContainer').style.marginTop = '2rem'
        }
        if(!showModalAgain) {
            document.getElementById('modalSecondBar').style.transition = '5s linear'
            document.getElementById('modalSecondBar').style.width = '0%'
        }
        if(!showModal) {
            document.getElementById('mainContainer').style.marginTop = '-10rem'
        }
        if(showModalAgain) {
            document.getElementById('modalSecondBar').style.transition = '0s'
            document.getElementById('modalSecondBar').style.width = '100%'
        }

        if(changeModalPage === 'login') document.getElementById('mainContainer').style.transform = 'translateX(0vw)'
        if(changeModalPage === 'cadastro') document.getElementById('mainContainer').style.transform = 'translateX(100vw)'
    })

    return (
        <div id='mainContainer' className={styles.mainContainer}>
            <div className={styles.modalContainer}>
                <div className={styles.modalMessage}>{modalMessage}</div>
                <div className={styles.modalBar}><div id='modalSecondBar' className={styles.modalSecondBar}></div></div>
            </div>
        </div>
    )
}