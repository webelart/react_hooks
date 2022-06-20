import React from 'react';

import styles from './index.module.scss';

export const InputPlus = ({}) => {
    return (
        <div className={styles.inputPlus}>
            <input
                type="text"
                className={styles.inputPlusValue}
                placeholder="Type here..."
            />
            <button
                onClick={() => {}}
                aria-label="Add"
                className={styles.inputPlusButton}
            />
        </div>
    );
}
