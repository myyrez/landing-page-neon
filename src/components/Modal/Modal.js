import React from 'react';
import styles from './styles.module.css';

export const Modal = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.modalContainer}>
                <div className={styles.modalMessage}>message</div>
                <div className={styles.modalBar}><div className={styles.modalSecondBar}></div></div>
            </div>
        </div>
    )
}