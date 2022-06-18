import React, {useState, useCallback} from 'react';

import styles from './index.module.scss';

export const InputPlus = ({
  onAdd,
}) => {
    const [inputValue, setInputValue] = useState('');
    const addTask = useCallback(() => {
        if (onAdd) {
            onAdd(inputValue);
        }
        setInputValue('');
    }, [inputValue])

    return (
        <div className={styles.inputPlus}>
            <input
                type="text"
                className={styles.inputPlusValue}
                value={inputValue}
                placeholder="Type here..."
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                onKeyDown={(evt) => {
                    if (evt.key === 'Enter') {
                        addTask();
                    }
                }}
            />
            <button
                onClick={addTask}
                aria-label="Add"
                className={styles.inputPlusButton}
            />
        </div>
    );
}
