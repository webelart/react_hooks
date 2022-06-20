import React from 'react';

import styles from './index.module.scss';

export const InputTask = ({
  title,
}) => {
    return (
        <div className={styles.inputTask}>
            <label className={styles.inputTaskLabel}>
                <input
                    type="checkbox"
                    className={styles.inputTaskCheckbox}
                />
                <h3 className={styles.inputTaskTitle}>{title}</h3>
            </label>
            <button
                onClick={() => {}}
                aria-label="Edit"
                className={styles.inputTaskEdit}
            />
            <button
                onClick={() => {
                    // if (confirm("Are you sure?")) {}
                }}
                aria-label="Remove"
                className={styles.inputTaskRemove}
            />
        </div>
    );
}

/* For Edit mode
<input
    className={styles.inputTaskTitleEdit}
/>

<button
    aria-label="Save"
    className={styles.inputTaskSave}
/>
*/